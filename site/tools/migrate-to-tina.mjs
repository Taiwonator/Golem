import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "data");
const contentDir = path.join(__dirname, "..", "content");

// --- Slate to Markdown converter ---

function slateToMarkdown(nodes) {
  if (!nodes || !Array.isArray(nodes)) return "";
  return nodes.map(serializeNode).join("\n\n");
}

function serializeNode(node) {
  const type = node.type || "";

  // Leaf text node (inline)
  if (node.text !== undefined) {
    return serializeLeaf(node);
  }

  const childrenText = (node.children || []).map(serializeNode).join("");

  switch (type) {
    case "h1":
      return `# ${childrenText}`;
    case "h2":
      return `## ${childrenText}`;
    case "h3":
      return `### ${childrenText}`;
    case "h4":
      return `#### ${childrenText}`;
    case "h5":
      return `##### ${childrenText}`;
    case "h6":
      return `###### ${childrenText}`;
    case "ul":
      return (node.children || [])
        .map((li) => `- ${(li.children || []).map(serializeNode).join("")}`)
        .join("\n");
    case "ol":
      return (node.children || [])
        .map(
          (li, i) =>
            `${i + 1}. ${(li.children || []).map(serializeNode).join("")}`
        )
        .join("\n");
    case "li":
      return childrenText;
    case "blockquote":
      return childrenText
        .split("\n")
        .map((l) => `> ${l}`)
        .join("\n");
    case "link":
      if (node.url) {
        return `[${childrenText || node.url}](${node.url})`;
      }
      return childrenText;
    case "upload":
      // Skip upload embeds (media IDs, not portable)
      return "";
    case "p":
    default:
      return childrenText;
  }
}

function serializeLeaf(leaf) {
  let text = leaf.text || "";
  if (!text.trim()) return text; // preserve whitespace-only as-is
  if (leaf.bold) text = `**${text}**`;
  if (leaf.italic) text = `*${text}*`;
  if (leaf.strikethrough) text = `~~${text}~~`;
  if (leaf.code) text = "`" + text + "`";
  return text;
}

// --- Frontmatter helper ---

function toFrontmatter(obj) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null || value === "") continue;
    if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === "string") {
      // Quote strings that might cause YAML issues
      if (
        value.includes(":") ||
        value.includes("#") ||
        value.includes('"') ||
        value.includes("'") ||
        value.includes("\n") ||
        value.startsWith("[") ||
        value.startsWith("{")
      ) {
        lines.push(`${key}: ${JSON.stringify(value)}`);
      } else {
        lines.push(`${key}: '${value}'`);
      }
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 80);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cleanBody(md) {
  // Trim excessive trailing newlines
  return md.replace(/\n{3,}/g, "\n\n").trim();
}

function writeMarkdown(dir, filename, frontmatter, body) {
  ensureDir(dir);
  const content = `${frontmatter}\n\n${cleanBody(body)}\n`;
  const filePath = path.join(dir, `${filename}.md`);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  ✓ ${filePath}`);
}

// --- Migrate each collection ---

function migratePosts() {
  console.log("\n📝 Migrating Posts...");
  const posts = JSON.parse(fs.readFileSync(path.join(dataDir, "posts.json"), "utf-8"));
  const outDir = path.join(contentDir, "posts");
  for (const post of posts) {
    const fm = toFrontmatter({
      title: post.title,
      slug: post.slug,
      snippet: post.snippet || "",
      featured: post.featured || false,
      publishedDate: post.publishedDate,
      author: post.author || "",
      status: post.status || "draft",
    });
    const body = slateToMarkdown(post.content);
    writeMarkdown(outDir, post.slug, fm, body);
  }
}

function migrateFieldReports() {
  console.log("\n📋 Migrating Field Reports...");
  const reports = JSON.parse(fs.readFileSync(path.join(dataDir, "field-reports.json"), "utf-8"));
  const outDir = path.join(contentDir, "field-reports");
  const usedSlugs = new Set();
  for (const report of reports) {
    let slug = report.slug;
    if (usedSlugs.has(slug)) {
      slug = `${slug}-${report._id.substring(0, 6)}`;
    }
    usedSlugs.add(slug);
    const fm = toFrontmatter({
      title: report.title,
      slug: report.slug,
      publishedDate: report.publishedDate,
      status: report.status || "draft",
    });
    const body = slateToMarkdown(report.content);
    writeMarkdown(outDir, slug, fm, body);
  }
}

function migrateFAQs() {
  console.log("\n❓ Migrating FAQs...");
  const faqs = JSON.parse(fs.readFileSync(path.join(dataDir, "faqs.json"), "utf-8"));
  const outDir = path.join(contentDir, "faqs");
  for (const faq of faqs) {
    const filename = slugify(faq.question || faq._id);
    const fm = toFrontmatter({
      question: faq.question,
    });
    const body = slateToMarkdown(faq.answer);
    writeMarkdown(outDir, filename, fm, body);
  }
}

function migrateGoals() {
  console.log("\n🎯 Migrating Goals...");
  const goals = JSON.parse(fs.readFileSync(path.join(dataDir, "goals.json"), "utf-8"));
  const outDir = path.join(contentDir, "goals");
  for (const [i, goal] of goals.entries()) {
    const filename = slugify(goal.text).substring(0, 60) || `goal-${i + 1}`;
    const fm = toFrontmatter({
      text: goal.text,
    });
    writeMarkdown(outDir, filename, fm, "");
  }
}

function migrateProjects() {
  console.log("\n🏗️  Migrating Projects...");
  const projects = JSON.parse(fs.readFileSync(path.join(dataDir, "projects.json"), "utf-8"));
  const outDir = path.join(contentDir, "projects");
  for (const [i, project] of projects.entries()) {
    const filename = slugify(project.text).substring(0, 60) || `project-${i + 1}`;
    const fm = toFrontmatter({
      text: project.text,
    });
    writeMarkdown(outDir, filename, fm, "");
  }
}

// --- Run ---
console.log("🚀 Starting PayloadCMS → TinaCMS migration...");
migratePosts();
migrateFieldReports();
migrateFAQs();
migrateGoals();
migrateProjects();
console.log("\n✅ Migration complete!");

