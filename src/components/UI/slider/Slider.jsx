import React, { useState } from "react";
import Book from "../../Book";
import classes from "./Slider.module.css"

const Slider = ({ category }) => {

  const [translates, setTranslete] = useState(0)

  if (translates > 0) {
    setTranslete(-2688)
  }

  if (translates < -2688) {
    setTranslete(0)
  }

  return (
    <div className={classes.outerWrapper}>
      <button onClick={() => setTranslete(translates + 224)}>+ + +</button>
      <div className={classes.sliderWrapper}>
        <div style={{ marginLeft: translates }} className={classes.booksWrapper}>
          {
            category.map((book) => {
              return <Book
                key={book.id}
                id={book.id}
                img={book.imageUrl}
                name={book.bookName}
                price={book.price}
                rating={book.bookRating}
                author={book.authorName}
              />
            })
          }
          <div>2</div>
        </div>
      </div>
      <button onClick={() => setTranslete(translates - 224)}>+ + +</button>
    </div>
  )
}

export default Slider