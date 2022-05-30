import React from "react";
import BookFilter from "./BookFilter";
import Basket from "./UI/basket/Basket";
import BurgerMenu from "./UI/burger-menu/BurgerMenu";
import Logo from "./UI/logo/Logo";

const Header = () => {

  return (
    <div className="header">
      <Logo />
      <BookFilter/>
      <Basket />
      <BurgerMenu/>
    </div>
  )
}

export default Header