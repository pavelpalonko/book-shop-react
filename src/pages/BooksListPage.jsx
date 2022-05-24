import React, { useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchBookAction } from "../store/asyncActionCreator/asyncFetchBookAction";
import { useFilter } from "../hooks/useFilter";
import Loader from "../components/UI/loader/Loader";
import Footer from "../components/Footer";

const BooksListPage = () => {
  const dispatch = useDispatch()
  const books = useSelector(({ bookR }) => bookR.books)
  const isLoading = useSelector(({ checkR }) => checkR.isLoading)
  const filterParam = useSelector(({ filtR }) => filtR)

  const sortBooks = useFilter(books, filterParam)
 
  useEffect(() => {
    dispatch(asyncFetchBookAction())
  },[dispatch])

  return (
    <>
      <Header />
      {isLoading
        ? <Loader />
        : <BookList books={sortBooks} />
      }
      <Footer/>
    </>

  )
}

export default BooksListPage