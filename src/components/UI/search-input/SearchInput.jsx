import React from "react";
import classes from "./SearchInput.module.css"
import { useDispatch, useSelector } from "react-redux";

const SearchInput = ({ action }) => {

  const query = useSelector(({ filtR }) => filtR.query)
  const dispatch = useDispatch()

  return (
    <div className={classes.wrapperMyInput}>
      <button onClick={() => dispatch(action(''))} className={classes.delet}>X</button>
      <input
        value={query}
        onChange={(e) => dispatch(action(e.target.value))}
        placeholder="search" className={classes.myInput}
        type="text"
      />
    </div>
  )
}

export default SearchInput