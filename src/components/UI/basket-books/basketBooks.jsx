import React, { useEffect, useState } from "react";
import classes from "./basketBooks.module.css"

const BasketBooks = ({ book, clearBooks, setBuyList }) => {

  const [currentOrder, setCurrentOrder] = useState({ bookId: book.id, quantiti: 1, bookPrice: book.price })

  const inc = () => {
    setCurrentOrder({ ...currentOrder, quantiti: currentOrder.quantiti + 1 })
  }

  const dec = () => {
    if (currentOrder.quantiti === 1) return
    setCurrentOrder({ ...currentOrder, quantiti: currentOrder.quantiti - 1 })
  }

  useEffect(() => {
    setBuyList(previousState => {
      return { ...previousState, [book.id]: currentOrder }
    })
  }, [currentOrder, setBuyList, book.id])

  return (
    <div className={classes.basketBookWrapp}>
      <div className={classes.bookWrapp}>
        <img className={classes.bookImage} src={book.imageUrl} alt="book" />
        <div className={classes.bookDesc}>
          <div className={classes.bookName}>{book.bookName}</div>
          <div className={classes.authorName}>{book.authorName}</div>
        </div>
      </div>

      <div className={classes.calcWrapp}>
        <div className={classes.counterWrapp}>
          <button className={classes.counterBtn} onClick={dec}>-</button>
          <div className={classes.counerNumber}>{currentOrder.quantiti}</div>
          <button className={classes.counterBtn} onClick={inc} >+</button>
        </div>

        <div className={classes.counterRes}>
          <div>{`${book.price}₴`}</div>
          <div className={classes.counerSymbol}>*</div>
          <div>{`${currentOrder.quantiti}pcs.`}</div>
          <div className={classes.counerSymbol}>=</div>
          <div>{`${currentOrder.bookPrice * currentOrder.quantiti}₴`}</div>
        </div>
      </div>


      <button className={classes.deletBtn} onClick={() => clearBooks(book.id)}>✖</button>
    </div>
  )
}

export default BasketBooks