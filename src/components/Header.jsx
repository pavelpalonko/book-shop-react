import React from "react";
import BookFilter from "./BookFilter";
import Basket from "./UI/basket/Basket";
import Logo from "./UI/logo/Logo";

const Header = () => {

  return (
    <div className="header">
      <Logo />
      <BookFilter/>
      <Basket />
    </div>
  )
}

export default Header