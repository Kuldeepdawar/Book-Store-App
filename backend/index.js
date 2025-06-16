import express from "express";
import userRoutes from "./route/user.route.js";
import bookRoutes from "./route/book.route.js";
import connectDbDatabase from "./db/connectDb.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/user", userRoutes); // <--- this makes POST /user/signup work
app.use("/book", bookRoutes);

app.get("/", (req, res) => {
  res.send("This is my server request");
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await connectDbDatabase();
    console.log(`✅ Server is running on http://localhost:${port}`);
  } catch (err) {
    console.error("❌ Database connection failed", err);
  }
});
