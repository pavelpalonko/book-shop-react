import React from "react";
import Book from "./Book";
import Loader from "./UI/loader/Loader";

const BookList = ({ books, isLoading }) => {

  return (
    <div className="books_wrapper">
      {
        books.map((book) =>
          <Book
            key={book.id}
            img={book.imageUrl}
            name={book.bookName}
            price={book.price}
            rating={book.bookRating}
            author={book.authorName}
          />)
      }
    </div>
  )
}

export default BookList