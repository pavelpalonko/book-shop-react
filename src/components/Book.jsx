import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ img, name, price, rating, author, id }) => {

  const route = useNavigate()

  return (
    <div className="book_wrapper" onClick={()=>route(`/books-shop/${id}`)}>
      <img className="book_image" src={img} alt="book" />
      <div className="book_description">
        <div>{price}</div>
        <div>{rating}</div>
      </div>
      <div>{name}</div>
      <div>{author}</div>
    </div>
  )
}

export default Book