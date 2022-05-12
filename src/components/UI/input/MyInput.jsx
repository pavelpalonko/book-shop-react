import React from "react";
import classes from "./MyInput.module.css"

const MyInput = () => {

  return (
    <>
      <input placeholder="search" className={classes.myInput} type="text" />
    </>
  )
}

export default MyInput