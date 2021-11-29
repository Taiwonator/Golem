const categories = ["one", "two", "three"] as const;
const tags = ["red", "yellow", "green"] as const;

export interface IPost {
    name: string,
    slug: string,
    author: string,
    snippet: string,
    body: string,
    views: number,
    mainImageUrl: string,
    datePublished: Date,
    dateCreated: Date,
    categories: typeof categories[number],
    tags: typeof tags[number][],
    comments: []
}
