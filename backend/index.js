import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("This is my server request");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
