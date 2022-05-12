import React from "react";
import logo from '../../../svg/logo.svg'
import classes from './Logo.module.css'

const Logo = () => {

  return (
    <div className={classes.myLogo}>
      <img alt="logo" src={logo}></img>
      <div>Book Store</div>
    </div>
  )
}

export default Logo