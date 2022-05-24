import React from "react";
import Book from "./UI/book/Book";

const BookList = ({ books }) => {

  return (
    <div className="books_wrapper">
      {
        books.map((book) =>
          <Book
            key={book.id}
            id={book.id}
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