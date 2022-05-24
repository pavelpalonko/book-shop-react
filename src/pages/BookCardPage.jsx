import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncFetchBookAction } from "../store/asyncActionCreator/asyncFetchBookAction";
import Loader from "../components/UI/loader/Loader"
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import Footer from "../components/Footer"

const BookIdPage = () => {

  const dispatch = useDispatch()
  const param = useParams()
  const books = useSelector(({ bookR }) => bookR.books)

  const isLoading = useSelector(({ checkR }) => checkR.isLoading)
  const [book = []] = books.filter((book) => book.id === +param.id)

  useEffect(() => {
    dispatch(asyncFetchBookAction())
  }, [dispatch])

  return (
    <>
      <Header />
      {
        isLoading
          ? <Loader />
          : <BookCard book={book} />
      }
      <Footer />
    </>
  )
}

export default BookIdPage