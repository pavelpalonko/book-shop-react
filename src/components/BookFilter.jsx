import React from "react";
import Sort from "./UI/sortList/Sort";
import SearchInput from "./UI/search-input/SearchInput";
import { searchBooks, categoryBooks, sortedBooks } from "../store/actionCreators/filtActions";
import { categoriesList, sortList, categoriesName, sortName } from "./stok/filtArrStock";

const BookFilter = () => {

  return (
    <div className="header_wrapper">
      <SearchInput action={searchBooks} />
      <div className="wrapper_sort--category ">
        <Sort
          action={sortedBooks}
          id='sort'
          name='Sorded'
          list={sortList}
          nameList={sortName}
        />
        <Sort
          action={categoryBooks}
          id='category'
          name='Categories'
          list={categoriesList}
          nameList={categoriesName}
        />
      </div>
    </div>
  )
}

export default BookFilter