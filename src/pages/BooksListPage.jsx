import React, { useEffect } from "react";
import BookList from "../components/BookList";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchBookAction } from "../store/asyncActionCreator/asyncFetchBookAction";
import { useFilter } from "../hooks/useFilter";
import Loader from "../components/UI/loader/Loader";
import Error from "../components/UI/error/Error";
import "../style/mainStyle.css"

const BooksListPage = () => {
  const dispatch = useDispatch()
  const books = useSelector(({ bookR }) => bookR.books)
  const isError = useSelector(({ bookR }) => bookR.fetchError)
  const isLoading = useSelector(({ checkR }) => checkR.isLoading)
  const filterParam = useSelector(({ filtR }) => filtR)

  const sortBooks = useFilter(books, filterParam)

  useEffect(() => {
    dispatch(asyncFetchBookAction())
  }, [dispatch])

  return (
    <>
      {isLoading
        ? <Loader />
        : isError
          ? <Error />
          : <BookList books={sortBooks} />
      }
    </>
  )
}

export default BooksListPage