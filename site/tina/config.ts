import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import('next-tinacms-s3')
      return pack.TinaCloudS3MediaStore
    },
  },
  schema: {
    collections: [
      // Posts Collection
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "publishedDate",
            label: "Published Date",
            required: true,
          },
          {
            type: "reference",
            name: "author",
            label: "Author",
            collections: ["author"],
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },

      // Field Reports Collection
      {
        name: "fieldReport",
        label: "Field Reports",
        path: "content/field-reports",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "publishedDate",
            label: "Published Date",
            required: true,
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/field-reports/${document._sys.filename}`,
        },
      },

      // FAQs Collection
      {
        name: "faq",
        label: "FAQs",
        path: "content/faqs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Answer",
            isBody: true,
          },
        ]
      },

      // Goals Collection
      {
        name: "goal",
        label: "Goals",
        path: "content/goals",
        format: "md",
        fields: [
          {
            type: "string",
            name: "text",
            label: "Goal Text",
            isTitle: true,
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Projects Collection
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "md",
        fields: [
          {
            type: "string",
            name: "text",
            label: "Project Description",
            isTitle: true,
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Project Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Authors Collection
      {
        name: "author",
        label: "Authors",
        path: "content/authors",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
        ],
      },

      // Pages Collection
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "blocks",
            label: "Blocks",
            list: true,
            templates: [
              {
                name: "videoCarousel",
                label: "Video Carousel",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "image",
                    name: "videos",
                    label: "Videos",
                    list: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
