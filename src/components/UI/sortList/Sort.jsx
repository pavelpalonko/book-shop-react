import React from "react";
import classes from "./Sort.module.css"

const Sort = ({ list, name }) => {
  return (
    <ul className={classes.menuName}>
      <li >{name}</li>
      <li>
        <ul className={classes.subMenu}>
          {list.map(cell => (
            <li key={cell}>{cell}</li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Sort
