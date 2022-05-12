import React from "react";
import basket from '../../../svg/basket.svg'
import classes from "./Basket.module.css"

const Basket = () => {

  return (
    <div className={classes.basketWrapper}>
      <img height={50} src={basket}></img>
      <div className={classes.basketDesc}>Basket</div>
    </div>
  )
}

export default Basket