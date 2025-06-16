import express from "express";

// ✅ Fix: Add .js extension if using ES Modules
import { getBook, createBook } from "../controller/book.controller.js";

const router = express.Router();

// GET /book → getBook controller will handle this
router.get("/", getBook);
router.post("/sendbook", createBook);

export default router;
