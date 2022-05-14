import React from "react";

const Book = ({ img, name, price, rating, author }) => {

  return (
    <div className="book_wrapper">
      <img style={{ backGround: 'green' }} width={200} height={310} src={img} alt="book" />
      <div className="book_description">
        <div>{price}</div>
        <div>{rating}</div>
      </div>
      <div>{name}</div>
      <div>{author}</div>
    </div>
  )
}

export default Book