import React from "react";
import classes from "./Loader.module.css"
import loader from "../../../svg/loader.svg"

const Loader = () => {

  return (
    <img className={classes.load} src={loader} alt='loader'></img>
  )
}

export default Loader