import * as express from "express";
import * as cors from "cors";

import {getAllPosts, getPost} from "./posts";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/posts/:id", getPost);
app.get("/posts", getAllPosts);

export default app;
