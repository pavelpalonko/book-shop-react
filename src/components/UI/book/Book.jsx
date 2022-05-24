import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Book.module.css"

const Book = ({ img, name, price, rating, author, id }) => {

  const route = useNavigate()

  return (
    <div className={classes.bookWrapper} onClick={()=>route(`/books-shop/${id}`)}>
      <img className={classes.bookImage} src={img} alt="book" />
      <div className={classes.bookDescription}>
        <div>{`${price} ₴`}</div>
        <div>{`${rating} ★`}</div>
      </div>
      <div>{name}</div>
      <div>{author}</div>
    </div>
  )
}

export default Book