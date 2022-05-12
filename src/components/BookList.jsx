import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { asyncFetchBookAction } from "../store/asyncActionCreator/asyncFetchBookAction";
import Loader from "./UI/loader/Loader";

const BookList = () => {

  const dispatch = useDispatch()
  const books = useSelector(({ bookR }) => bookR.books)
  const isLoading = useSelector(({ loadR }) => loadR.isLoading)

  useEffect(() => {
    dispatch(asyncFetchBookAction())
  }, [])

  return (
    <div className="books_wrapper">
      {
        isLoading
          ? <Loader />
          : books.map((book) =>
            <Book key={book.id} img={book.imageUrl} name={book.bookName} />)
      }
    </div>
  )
}

export default BookList