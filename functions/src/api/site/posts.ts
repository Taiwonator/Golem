import {Response} from "express";
import {db} from "../../util/admin";

interface GetPostRequest {
  params: { id: string },
  query: { slug: string }
}

export const getAllPosts =
  async (req: GetPostRequest, res: Response): Promise<void> => {
    if (req.query.slug) {
      const query =
        await db.collection("posts").where("slug", "==", req.query.slug).get();
      if (query.empty) {
        res.status(404).json({message: "document doesn't exist"});
      } else {
        const snapshot = query.docs[0];
        res.status(200).json(snapshot.data());
      }
    } else {
      try {
        const posts: FirebaseFirestore.DocumentData[] = [];
        const querySnapshot = await db.collection("posts").get();
        querySnapshot.forEach((doc) => posts.push(doc.data()));
        res.status(200).json(posts);
      } catch (err) {
        res.status(500).json(err.message);
      }
    }
  };

export const getPost =
  async (req: GetPostRequest, res: Response): Promise<void> => {
    let postRef;
    if (req.params.id) {
      postRef = db.collection("posts").doc(req.params.id);
      const doc = await postRef.get();
      if (!doc.exists) {
        res.status(404).json({message: "document doesn't exist"});
      } else {
        res.status(200).json(doc.data());
      }
    }
  };
