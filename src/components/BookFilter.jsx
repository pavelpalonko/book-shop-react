import React from "react";
import Sort from "./UI/sortList/Sort";
import SearchInput from "./UI/search-input/SearchInput";
import { useSelector } from "react-redux";
import { searchBooks, categoryBooks, sortedBooks } from "../store/actionCreators/filtActions";
import { categoriesList, sortList, categoriesName, sortName } from "./stok/filtArrStock";

const BookFilter = () => {

  const category = useSelector(({ filtR }) => filtR.category)

  return (
    <div className="filter_wrapper">
      <SearchInput action={searchBooks} />
      <div className="sort_wrapper">
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
        <div className="filter_shows-categiry">{category}</div>
      </div>
    </div>
  )
}

export default BookFilter