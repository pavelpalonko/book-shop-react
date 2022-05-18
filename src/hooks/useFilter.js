import { useMemo } from "react"
import { randomNumber } from "../components/utils/randomNumber"

export const useFilter = (listBooks, filtParam) => {

  const { query, sort, category } = filtParam
  return useSort(listBooks, query, sort, category)
}

function useSort (listBooks, query, sort, category) {
  
  const currentCategoryList = useCategories(listBooks, query, category)
  const sortedBooks = useMemo( () => {
    switch (sort) {
      case 'price 0':
        return currentCategoryList.sort( (a, b) => a.price - b.price)
      case 'price 1':
        return currentCategoryList.sort( (a, b) => b.price - a.price)
      case 'rating 1':
        return currentCategoryList.sort( (a, b) => b.bookRating - a.bookRating) 
      case 'rating 0':
        return currentCategoryList.sort( (a, b) => a.bookRating- b.bookRating) 
      case 'reset':
        return randomNumber(currentCategoryList)
      default:
        return currentCategoryList    
    }

  }, [currentCategoryList, sort])

  return sortedBooks
}

function useCategories(listBooks, query, category  ) {
  
  const searchBooks = useSearchBooks( listBooks, query )
  const currentCategoryList = useMemo(() => {
    if (category && category !== 'all') {
      return searchBooks.filter((book) => book.category === category)
    }
    return searchBooks
  }, [searchBooks, category])
  
  return currentCategoryList
}

function useSearchBooks (listBooks, query) {

  const foundBooks = useMemo( () => {
    if (query) {
      return listBooks.filter((book) => book.bookName.toLowerCase().includes(query.toLowerCase()))
    }
    return listBooks
  },[listBooks, query])

  return foundBooks
}