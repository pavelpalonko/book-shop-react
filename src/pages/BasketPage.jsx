import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import BasketBooks from "../components/UI/basket-books/basketBooks";
import { deleteBook } from "../store/actionCreators/basketActions";
const BasketPage = () => {

  const basketBooks = useSelector(({ baskR }) => baskR.booksBasket)
  const [buyList, setBuyList] = useState({})
  const dispatch = useDispatch()

  const clearBooks = (deletId) => {
    const clearBookList = basketBooks.filter((book) => book.id !== deletId)
    dispatch(deleteBook(clearBookList))
    setBuyList({ ...buyList, [deletId]: delete buyList[deletId] })
  }

  const clearAll = () => {
    dispatch(deleteBook([]))
    setBuyList({})
  }

  const totalSum = Object.values(buyList).reduce((acum, book) => {
    return acum + book.totalAmount
  }, 0)

  return (
    <>
      <Header />
      <div style={{ marginTop: '200px' }}>
        {
          basketBooks.length === 0
            ? <div>NOT YEAT</div>
            : <>
              <div>{totalSum}</div>
              <button onClick={clearAll}>clear all</button>
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
        }
      </div>

    </>
  )
}

export default BasketPage