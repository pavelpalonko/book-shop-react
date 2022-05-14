import React from "react";
import classes from "./MyInput.module.css"
import { useDispatch } from "react-redux";

const MyInput = ({action}) => {

  const dispatch = useDispatch()

  return (
    <>
      <input onChange={(e) => dispatch(action(e.target.value))} placeholder="search" className={classes.myInput} type="text" />
    </>
  )
}

export default MyInput