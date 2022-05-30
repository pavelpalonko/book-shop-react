import React from "react";
import { Link } from "react-router-dom";
import basket from '../../../svg/basket.svg'
import classes from "./Basket.module.css"
import ShopCounter from "../shopping-counter/ShopCounter";

const Basket = () => {

 

  return (
    <Link to='/basket-page' className={classes.basketWrapper}>
      <img height={50} src={basket} alt='basket'></img>
      <div className={classes.basketDesc}>Basket</div>
      <ShopCounter styles={'basketIcon'}/>
    </Link>
  )
}

export default Basket