import React from "react";

const Book = ({ img, name }) => {

  return (
    <div>
      <img style={{ backGround: 'green' }} width={300} height={300} src={img} alt="" />
      <div>{name}</div>
    </div>
  )
}

export default Book