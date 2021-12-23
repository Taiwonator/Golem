import * as express from "express";
import * as cors from "cors";

import {addPost} from "./posts";
import {getUser} from "./user";

const app = express();

const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.get("/users/:id", getUser);
app.post("/posts", addPost);

export default app;
