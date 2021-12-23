import {Response} from "express";
import {db} from "../../util/admin";

interface Request {
  params: { id: string },
  query: { slug: string }
}

export const getUser =
  async (req: Request, res: Response): Promise<void> => {
    let userRef;
    if (req.params.id) {
      userRef = db.collection("users").doc(req.params.id);
      const doc = await userRef.get();
      if (!doc.exists) {
        res.status(404).json({message: "document doesn't exist"});
      } else {
        res.status(200).json(doc.data());
      }
    } else {
      console.log(req.params);
      res.status(404).json({message: "invalid request"});
    }
  };
