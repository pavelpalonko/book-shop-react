import React from "react";
import classes from "./BookDescription.module.css"


const BookDescription = ({ book }) => {

  return (
    <div className={classes.bookDescriptionContainer}>

      <div className={classes.bookDescBuyBttnWrapp} >
        <div className={classes.bookImgDecsWrapp}>

          <img className={classes.bookImg} src={book.imageUrl} alt='book'></img>

          <div>
            <div className={classes.bookName}>{book.bookName}</div>
            <div className={classes.bookAuthor}>{book.authorName}</div>
            <div className={classes.bookRaiting}>{book.bookRating}</div>
          </div>

        </div>

        <div className={classes.buyBtnWrapp}>
          <button className={classes.buyBtn} onClick={() => console.log(book.id)}>add to basket</button>
        </div>

      </div>

      <div className={classes.descriptionWrapp}>
        <div className={classes.bookDescriptin}>Descriptoin</div>
        <div>{book.description}</div>
      </div>

    </div>
  )
}

export default BookDescription