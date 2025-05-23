
import Book from "../model/book_model.js";

export const getBook=async(req,res)=>{
    try{
      const book=await Book.find();
      res.status(201).json(book);
    }catch(err){
      res.status(500).json(err)
    }
}
export const addBook = async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;

    // Simple validation
    if (!name || !title || !price || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = new Book({
      name,
      title,
      price,
      category,
      image
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to add book", error });
  }
};

export const deletebook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete book", error: err });
  }
};
