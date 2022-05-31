import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sort from "../sortList/Sort";
import classes from "./BurgerMenu.module.css"
import { categoryBooks, sortedBooks } from "../../../store/actionCreators/filtActions";
import { categoriesList, sortList, categoriesName, sortName } from "../../stok/filtArrStock";
import ShopCounter from "../shopping-counter/ShopCounter";

const BurgerMenu = () => {
  const [visableMenu, setVisablMenu] = useState(false)
  const rootClasses = [classes.burgerMenu]
  const rootIconClasses = [classes.iconBurger]
  const rootShopCount = []

  if (visableMenu) {
    rootClasses.push(classes.burgerMenuVisable)
    rootIconClasses.push(classes.iconBurgerActive)
    rootShopCount.push(classes.shopCount)
  }

  return (
    <>
      <div className={classes.burgerBtn} onClick={e => setVisablMenu(!visableMenu)}>
        <span className={rootIconClasses.join(' ')}></span>
        <div className={rootShopCount.join('')}>
          <ShopCounter styles={'burgerIcon'} />
        </div>
      </div>
      <div className={rootClasses.join(' ')}>
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
        <div className={classes.basketLinkWrapp}>
          <Link className={classes.basketLink} to='/basket-page' >Basket</Link>
          <ShopCounter styles={'basketAdaptiveIcon'} />
        </div>
      </div>
    </>
  )
}

export default BurgerMenu