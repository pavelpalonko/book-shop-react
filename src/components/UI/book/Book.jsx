import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Book.module.css"

const Book = ({ img, name, price, rating, author, id }) => {

  const route = useNavigate()

  const selectBook = () => { 
    route(`/books-shop/${id}`)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={classes.bookContainer}  onClick={selectBook}>
      <div className={classes.bookWrapper}>
        <img className={classes.bookImage} src={img} alt="book" />
        <div className={classes.bookPrice}>
          <div>{`${price} ₴`}</div>
          <div>{`${rating} ★`}</div>
        </div>
      </div>
      <div className={classes.bookDescription}>
        <div className={classes.bookAuthor}>{author}</div>
        <div className={classes.bookName}>{name}</div>
      </div>
    </div>
  )
}

export default Book