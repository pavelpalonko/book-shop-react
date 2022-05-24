import React, { useEffect, useState } from "react";
import classes from "./basketBooks.module.css"

const BasketBooks = ({ book, clearBooks, setBuyList }) => {

  const [currentOrder, setCurrentOrder] = useState({ quantiti: 1, totalAmount: book.price })

  const inc = () => {
    setCurrentOrder({
      quantiti: currentOrder.quantiti + 1,
      totalAmount: currentOrder.totalAmount + book.price
    })
  }

  const dec = () => {
    if (currentOrder.quantiti === 1) return
    setCurrentOrder({
      quantiti: currentOrder.quantiti - 1,
      totalAmount: currentOrder.totalAmount - book.price
    })
  }

  useEffect(() => {
    setBuyList(previousState => {
      return { ...previousState, [book.id]: currentOrder }
    })
  }, [currentOrder, setBuyList, book.id])

  return (
    <div className={classes.basketBookWrapp}>
      <img style={{ border: '2px black solid' }} src={book.imageUrl} alt="book" />
      <div>{book.price}</div>

      <button onClick={dec}>A---A</button>
      <div style={{ fontSize: '25px', width: '20px' }}>{currentOrder.quantiti}</div>
      <button onClick={inc} >A+++A</button>

      <div>{book.price}</div>
      <div>X</div>
      <div>{currentOrder.quantiti}</div>
      <div>===</div>
      <div>{currentOrder.totalAmount}</div>
      <button onClick={() => clearBooks(book.id)}>XxxxxxxxxxX</button>
    </div>
  )
}

export default BasketBooks