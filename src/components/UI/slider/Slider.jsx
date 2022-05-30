import React, { useEffect, useState } from "react";
import Book from "../book/Book";
import classes from "./Slider.module.css"

const Slider = ({ category }) => {
  const [wrapWidth, setWrapWidth] = useState(0)
  const [translates, setTranslete] = useState(0)

  const sliderLength = (category.length ? (category.length) : null) * 260 - wrapWidth

  useEffect(() => {
    const elem = document.querySelector(`.${classes.sliderWrapper}`)
    setWrapWidth(parseInt(getComputedStyle(elem).maxWidth))
  }, [])

  if (translates > 0) {
    setTranslete(-sliderLength)
  }

  if (translates < -sliderLength) {
    setTranslete(0)
  }

  return (
    <>
      <div className={classes.categoryName}>{category[0]?.category}</div>
      <div className={classes.sliderContainer}>
        <button className={classes.arrwoBtn} onClick={() => setTranslete(translates + 260)}>◄</button>
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
            <div></div>
          </div>
        </div>
        <button className={classes.arrwoBtn} onClick={() => setTranslete(translates - 260)}>►</button>
      </div>
    </>
  )
}

export default Slider