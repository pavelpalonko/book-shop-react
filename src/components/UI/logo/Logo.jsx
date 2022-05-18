import React from "react";
import logo from '../../../svg/logo.svg'
import classes from './Logo.module.css'
import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <Link to='books-shop' className={classes.myLogo}>
      <img alt="logo" src={logo}></img>
      <div>Book Store</div>
    </Link>
  )
}

export default Logo