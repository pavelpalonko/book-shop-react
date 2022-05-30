import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./BookDescription.module.css"
import { addBook } from "../../../store/actionCreators/basketActions";
import { Link } from "react-router-dom";
import MyButton from "../my-button/MyButton";

const BookDescription = ({ currentBook }) => {

  const dispatch = useDispatch()
  const basketBooks = useSelector(({ baskR }) => baskR.booksBasket)
  const checking = basketBooks.find((book) => book.id === currentBook.id)

  return (
    <div className={classes.bookDescriptionContainer}>

      <div className={classes.bookDescBuyBttnWrapp} >
        <div className={classes.bookImgDecsWrapp}>

          <img className={classes.bookImg} src={currentBook.imageUrl} alt='book'></img>

          <div className={classes.bookNameWrapp}>
            <div className={classes.bookName}>{currentBook.bookName}</div>
            <div className={classes.bookAuthor}>{currentBook.authorName}</div>
            <div className={classes.bookRaiting}>{`${currentBook.bookRating} ★ `}</div>
          </div>

        </div>

        <div className={classes.buyBtnWrapp}>
          <div className={classes.buyBtnDesc}>
            <div>{`${currentBook.price} ₴`}</div>
            <div>In stock ✔</div>
          </div>

          {
            checking
              ? <Link to='/basket-page'> <MyButton className={classes.buyBtn} >Go to basket</MyButton > </Link>
              : <MyButton  className={classes.buyBtn} onClick={() => dispatch(addBook(currentBook))}>Add to basket</MyButton >
          }
        </div>

      </div>

      <div className={classes.descriptionWrapp}>
        <div className={classes.bookDescriptin}>Descriptoin</div>
        <div>{currentBook.description}</div>
      </div>

    </div>
  )
}

export default BookDescription