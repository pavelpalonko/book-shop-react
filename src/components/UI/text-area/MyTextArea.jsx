import React from "react";
import classes from "./MyTextArea.module.css"

const MyTextArea = (props) => {

  return (
    <textarea {...props} className={classes.myTxt}>

    </textarea>
  )
}

export default MyTextArea