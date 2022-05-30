import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncFetchBookAction } from "../store/asyncActionCreator/asyncFetchBookAction";
import Loader from "../components/UI/loader/Loader"
import BookCard from "../components/BookCard";
import Error from "../components/UI/error/Error";

const BookIdPage = () => {

  const dispatch = useDispatch()
  const param = useParams()
  const books = useSelector(({ bookR }) => bookR.books)
  const isError = useSelector(({ bookR }) => bookR.fetchError)

  const isLoading = useSelector(({ checkR }) => checkR.isLoading)
  const [book = []] = books.filter((book) => book.id === +param.id)

  useEffect(() => {
    dispatch(asyncFetchBookAction())
  }, [dispatch])

  return (
    <>
      {
        isLoading
          ? <Loader />
          : isError
            ? <Error />
            : <BookCard book={book} />
      }
    </>
  )
}

export default BookIdPage