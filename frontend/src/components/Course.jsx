import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  console.log(book);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error("Error in course file", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="font-semibold text-center items-center justify-center">
          <h1 className="text-2xl mt-28 md:text-4xl">
            We are delighted to you{" "}
            <span className="text-pink-600">are here :)</span>
          </h1>
          <p className="mt-12">
            Reading books offers numerous benefits that enrich both the mind and
            soul. It enhances vocabulary, improves focus, and strengthens
            memory. Books stimulate imagination, boost creativity, and increase
            knowledge across various subjects. Regular reading reduces stress,
            promotes mental clarity, and can even improve sleep. It also
            sharpens critical thinking and analytical skills, helping
            individuals solve problems more effectively.
          </p>
          <Link to="/">
            <button className="mt-8 bg-pink-500 hover:bg-pink-700 px-2 py-1 rounded-md cursor-pointer">
              Back
            </button>
          </Link>
          <div className="mt-11 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
