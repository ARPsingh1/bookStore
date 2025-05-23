// Delete.jsx
import axios from "axios";

export const deleteBook = async (id) => {
  try {
    // await axios.delete(`http://localhost:8080/books/${id}`); // Ensure route matches backend
    await axios.delete(`https://bookstore-uv14.onrender.com/books/${id}`); // Ensure route matches backend
    return { success: true };
  } catch (error) {
    console.error("Failed to delete book", error);
    return { success: false, error };
  }
};
