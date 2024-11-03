import { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div >
      <h2 className="text-center text-4xl font-bold my-5 ">Books</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {books.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
