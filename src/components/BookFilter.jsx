import React from "react";
import Sort from "./UI/sortList/Sort";
import MyInput from "./UI/input/MyInput";
import { searchBooks, categoryBooks, sortedBooks } from "../store/actionCreators/filtActions";

const BookFilter = () => {

  const categories = ['business literature', 'comics manga', 'detectives', 'fantasy', 'programming', 'psychology', 'all']
  const sort = ['price 1', 'price 0', 'rating 1', 'rating 0', 'reset']

  return (
    <div className="header_wrapper">
      <MyInput action={searchBooks} />
      <div className="wrapper_sort--category ">
        <Sort action={sortedBooks} id='sort' name='Sorded' list={sort} />
        <Sort action={categoryBooks} id='category' name='Categories' list={categories} />
      </div>
    </div>
  )
}

export default BookFilter