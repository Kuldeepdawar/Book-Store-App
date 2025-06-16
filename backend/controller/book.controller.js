// ✅ Always include the correct file extension (.js) when using ES Modules
import Book from "../model/book.model.js";

// Controller to get all books
export const getBook = async (req, res) => {
  try {
    // 🔍 Fetch all books from the database
    const books = await Book.find();

    // Send response with status 200 and data
    res.status(200).json(books);
  } catch (error) {
    console.error(" Error fetching books:", error);

    // Send internal server error
    res.status(500).json({ message: "Failed to fetch books", error });
  }
};

export const createBook = async (req, res) => {
  try {
    // ✅ Destructure from req.body (now works because of express.json())
    const { name, price, category, image, title } = req.body;

    const newBook = new Book({ name, price, category, image, title });
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ message: "Failed to create book", error });
  }
};
