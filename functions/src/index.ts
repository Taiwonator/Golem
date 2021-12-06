import {https} from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

import {addPost, getAllPosts, getPost} from "./api/posts";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/posts/:id", getPost);
app.get("/posts", getAllPosts);
app.post("/posts", addPost);

exports.app = https.onRequest(app);


/* TODO
-> Sort out server lovation

*/
