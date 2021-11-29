import {Response} from "express";
import {db} from "../util/admin";
import {IPost} from "./schema";

interface IPostPayload extends IPost {
    id: string
}

interface IRequest {
    body: IPost,
    params: { id: string }
}

// POSTS
const addPost = async (req: IRequest, res: Response) => {
  // Get blog post input details
  try {
    const post = db.collection("posts").doc();
    const {
      name,
      slug,
      author,
      snippet,
      body,
      mainImageUrl,
      datePublished,
      dateCreated,
      categories,
      tags,
      comments,
      views,
    } = req.body;

    const postObject: IPostPayload = {
      id: post.id,
      name,
      slug,
      author,
      snippet,
      body,
      mainImageUrl,
      datePublished,
      dateCreated,
      categories,
      tags,
      comments,
      views,
    };

    await post.set(postObject);

    res.status(200).send({
      status: "success",
      message: "post was added successfully",
      data: postObject,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllPosts = async (req: IRequest, res: Response) => {
  try {
    const posts: any = [];
    const querySnapshot = await db.collection("posts").get();
    querySnapshot.forEach((doc: any) => posts.push(doc.data()));
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Post[]
// -- Name
// -- Slug
// -- Publish Date
// -- Snippet
// -- Body
// -- Author
// -- MainImage
// -- Comment[]
// -- Tag[]
// -- Category[]

// User[]
// -- Name
// -- Email Address

export {addPost, getAllPosts};
