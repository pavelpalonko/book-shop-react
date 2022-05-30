import React from "react";
import { useSelector } from "react-redux";
import classes from "./ShopCounter.module.css"

const ShopCounter = ({styles}) => {

  const rootClasses = [classes.shopIcon]
  rootClasses.push(classes[styles])

  const basketBooks = useSelector(({ baskR }) => baskR.booksBasket)

  return (
    <>
      {
        basketBooks.length
          ? <div className={rootClasses.join(' ')}>{basketBooks.length}</div>
          : null
      }
    </>
  )
}

export default ShopCounter