import express from "express";
import routePath from "./route/book.route.js";
import cors from "cors";

import dotenv from "dotenv";
import connectDbDatabase from "./db/connectDb.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/book", routePath);

app.get("/", (req, res) => {
  res.send("This is my server request");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDbDatabase();
  console.log(`server is running ${port}`);
});
