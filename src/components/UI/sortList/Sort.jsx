import React from "react";
import classes from "./Sort.module.css"
import { useDispatch } from "react-redux";

const Sort = ({ id, name, action, list, nameList }) => {
  const dispatch = useDispatch()

  return (
    <ul className={classes.menuName}>
      <li >{name}</li>
      <li>
        <ul className={classes.subMenu}>
          {list.map((cell, ind) => (
            <li
              id={id}
              data-category={cell}
              key={cell}
              onClick={(e) => dispatch(action(e.target.dataset.category))}
            >{nameList[ind]}</li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Sort