export async function getPost(slug, fields=[]): Promise<any> {
    // Make API Request
    const res = await fetch(`http://localhost:5001/blog-backend-67f71/us-central1/site/posts/?slug=${slug}`)
    const post = await res.json()

    if(fields.length) return filterPost(post, fields)

    return post
}

function filterPost(post, fields) {
    let filteredPost = {}
    for (const key in post) if(fields.includes(key)) filteredPost[key] = post[key]
    return filteredPost
}

// PERFORMANCE
// https://hackernoon.com/5-techniques-to-iterate-over-javascript-object-entries-and-their-performance-6602dcb708a8

export async function getPosts(fields=[]) {
    const res = await fetch('https://us-central1-blog-backend-67f71.cloudfunctions.net/app/posts')
    const posts = await res.json()

    if(fields.length) return posts.map(post => filterPost(post, fields))
    return posts
}

export async function getSlugs() {
    const posts = await getPosts()
    const slugs = posts.map(post => post.slug)
    return slugs
}
