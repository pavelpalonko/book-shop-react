import React, { useState } from "react";
import BasketBooks from "../basket-books/basketBooks";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../../store/actionCreators/basketActions";
import classes from "./BasketWrapper.module.css"
import MyButton from "../my-button/MyButton";
import cart from "../../../svg/cart.svg"

const BasketWrapper = () => {

  const basketBooks = useSelector(({ baskR }) => baskR.booksBasket)
  const [buyList, setBuyList] = useState({})
  const dispatch = useDispatch()

  const clearBooks = (deletId) => {
    const clearBookList = basketBooks.filter((book) => book.id !== deletId)
    dispatch(deleteBook(clearBookList))
    setBuyList(previousState => {
      delete previousState[deletId]
      return { ...previousState }
    })
  }

  const clearAll = () => {
    dispatch(deleteBook([]))
    setBuyList({})
  }

  const totalSum = Object.values(buyList).reduce((acum, book) => {
    return acum + book.quantiti * book.bookPrice
  }, 0)

  return (
    <div className={classes.basketWrapper}>
      {
        basketBooks.length
          ? <>
            <div className={classes.basketHeadWrapp}>
              <div className={classes.totalSum}>{`Total price: ${totalSum}₴`}</div>
              <MyButton onClick={clearAll} >Clear all ✖</MyButton>
            </div>
            {
              basketBooks.map((book) => {
                return <BasketBooks
                  key={book.id}
                  book={book}
                  clearBooks={clearBooks}
                  setBuyList={setBuyList}
                />
              })
            }
          </>
          :<div className={classes.emptyBasket}>
            <img className={classes.imgBask} src={cart} alt="cart" />
            <span>Your basket is empty...</span>
          </div>
      }
    </div>
  )
}

export default BasketWrapper