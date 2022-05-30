import React from "react";
import err from "../../../svg/error.svg"
import classes from "./Error.module.css"

const Error = () => {
  return (
    <div className={classes.errWrapp}>
      <img className={classes.errImg} src={err} alt="error" />
      <span>Error: Failed to load...</span>
    </div>
  )
}

export default Error