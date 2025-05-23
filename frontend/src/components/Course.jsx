import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Link } from 'react-router-dom';
// import { getBook } from '../../../backend/controller/book_controller';

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8080/book');
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, []);

  // 🧹 Function to update UI after deletion
  const handleDelete = (id) => {
    setBook(prevBooks => prevBooks.filter(book => book._id !== id));
  };

  return (
    <>
      <div className="mt-22 max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex flex-col justify-center items-center gap-10 w-3/4 m-auto">
          <h1 className="text-5xl text-center">We're delighted to have you here!</h1>
          <p className="text-center">
            The bookstore is a place where students can find and buy the books they need for their courses. It includes textbooks, notes, and other helpful study materials. Some books are available in printed form, and some can be read online. The bookstore is updated often to match the latest course topics and subjects.
          </p>
          <div className="flex gap-20">

          <Link to='/'>
            <button className="btn bg-pink-700 hover:bg-pink-400 px-6 text-lg">Back</button>
          </Link>
          <Link to='/add'>
            <button className="btn bg-pink-700 hover:bg-pink-400 px-6 text-sm sm:text-lg">Add Book</button>
          </Link>
          </div>
        </div>

        {/* 🔁 Render Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          {book.map((card) => (
            <Cards key={card._id} card={card} onDelete={handleDelete}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
