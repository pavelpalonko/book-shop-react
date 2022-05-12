import React from "react";
import Basket from "./UI/basket/Basket";
import MyInput from "./UI/input/MyInput";
import Logo from "./UI/logo/Logo";
import Sort from "./UI/sortList/Sort";

const Header = () => {

  const categories = ['fantasy', 'comics', 'adwenture']
  const sort = ['price', 'raiting']

  return (
    <div className="header">
      <Logo />
      <div className="header_wrapper">
        <MyInput />
        <div className="wrapper_sort--category ">
          <Sort name='Categories' list={categories} />
          <Sort name='Sorded' list={sort}/>
        </div>
      </div>
      <Basket />  
    </div>
  )
}

export default Header