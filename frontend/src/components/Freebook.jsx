import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
// import list from '../list.json';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Freebook = () => {
  const [book, setBook] = useState([]);
useEffect(() => {
  const getBook = async () => {
    try {
      const res = await axios.get('http://localhost:8080/book');
      console.log(res.data);
      const data=res.data.filter((data) => data.category === 'Free');
      setBook(data);
    } catch (err) {
      console.log(err)
    }
  }
  getBook();
}, []);
const handleDelete = (id) => {
  setBook(prevBooks => prevBooks.filter(book => book._id !== id));
};
  // const filterData = 
  // console.log(filterData);

  var settings = {  //react slick slider user here
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="text-4xl">Free Offered Books</h1>
        <p>
          Discover a wide range of free books across various genres. Whether
          you're looking to learn something new or simply enjoy a good read, these
          books are available to download or read online at no cost.
        </p>
      </div>
      <div>
        <div className="px-10">
          <Slider {...settings}>
            {
              book.map((item) => {
                return <Cards key={item.id} card={item} onDelete={handleDelete}/>;
              })
            }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
