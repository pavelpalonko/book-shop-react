import React from "react";
import classes from "./Sort.module.css"
import { useDispatch } from "react-redux";


const Sort = ({id, list, name, action }) => {
  const dispatch = useDispatch()

  return (
    <ul className={classes.menuName}>
      <li >{name}</li>
      <li>
        <ul className={classes.subMenu}>
          {list.map(cell => (
            <li id={id} onClick={(e) => dispatch(action(e.target.innerText))} key={cell} >{cell}</li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Sort
