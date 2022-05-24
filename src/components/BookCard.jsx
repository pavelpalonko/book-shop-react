import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookDescription from "./UI/book-description/BookDescription";
import FormItem from "./FormItem";
import Slider from "./UI/slider/Slider";
import Comment from "./UI/comment/Comment";
import MyModal from "./UI/modal/MyModal";
import { showModal } from "../store/actionCreators/checkActions";
import MyButton from "./UI/my-button/MyButton";

const BookCard = ({ book }) => {
  
  const dispatch = useDispatch()
  const bookCategory = book.category
  const books = useSelector(({ bookR }) => bookR.books)
  const category = books.filter((book) => book.category === bookCategory)
  const comments = useSelector(({ commR }) => commR.comments)

  return (
    <>
      <BookDescription currentBook={book} />

      <Slider category={category} />
      <MyButton onClick={() => dispatch(showModal(true))}>ADD NEW COMMENT</MyButton>

      <MyModal>
        <FormItem />
      </MyModal>

      {comments.map((comm) =>
        <Comment key={comm.id} comment={comm} comments={comments} />
      )}
    </>
  )
}

export default BookCard