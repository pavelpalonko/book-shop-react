import React, { useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchBookAction } from "../store/asyncActionCreator/asyncFetchBookAction";
import { useFilter } from "../hooks/useFilter";
import Loader from "../components/UI/loader/Loader";

const BooksListPage = () => {
  const dispatch = useDispatch()
  const books = useSelector(({ bookR }) => bookR.books)
  const isLoading = useSelector(({ loadR }) => loadR.isLoading)
  const filterParam = useSelector(({ filtR }) => filtR)

  const sortBooks = useFilter(books, filterParam)

  useEffect(() => {
    dispatch(asyncFetchBookAction())
  },[])

  return (
    <>
      <Header />
      {isLoading
        ? <Loader />
        : <BookList books={sortBooks} />
      }

    </>

  )
}

export default BooksListPage