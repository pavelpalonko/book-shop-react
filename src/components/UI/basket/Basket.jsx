import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import basket from '../../../svg/basket.svg'
import classes from "./Basket.module.css"


const Basket = () => {

  const basketBooks = useSelector(({ baskR }) => baskR.booksBasket)

  return (
    <Link to='/basket-page' className={classes.basketWrapper}>
      <img height={50} src={basket} alt='basket'></img>
      <div className={classes.basketDesc}>Basket</div>
      {
        basketBooks.length 
        ? <div className={classes.basketCounter}>{basketBooks.length}</div>
        : null
      }
      
    </Link>
  )
}

export default Basket