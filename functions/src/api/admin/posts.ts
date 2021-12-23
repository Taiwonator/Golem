import {Response} from "express";
import {db} from "../../util/admin";
import {IPost} from "./schema";

interface IPostBody extends IPost {
    id: string
}

interface AddPostRequest {
    body: IPost,
}

export const addPost =
  async (req: AddPostRequest, res: Response): Promise<void> => {
    try {
      const postRef = db.collection("posts").doc();
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

      const postObject: IPostBody = {
        id: postRef.id,
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

      await postRef.set(postObject);

      res.status(200).send({
        status: "success",
        message: "post was added successfully",
        data: postObject,
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
