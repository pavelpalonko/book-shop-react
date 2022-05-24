import { useMemo } from "react"
import { sortArr } from "../components/utils/sortArr"

export const useFilter = (listBooks, filtParam) => {
  const { query, sort, category } = filtParam
  return useSort(listBooks, query, sort, category)
}

function useSort(listBooks, query, sort, category) {

  const currentCategoryList = useCategories(listBooks, query, category)
  const sortedBooks = useMemo(() => {
    switch (sort) {
      case 'price max':
        return currentCategoryList.sort((a, b) => b.price - a.price)
      case 'price min':
        return currentCategoryList.sort((a, b) => a.price - b.price)
      case 'rating max':
        return currentCategoryList.sort((a, b) => b.bookRating - a.bookRating)
      case 'rating min':
        return currentCategoryList.sort((a, b) => a.bookRating - b.bookRating)
      case 'reset':
        return sortArr(currentCategoryList)
      default:
        return currentCategoryList
    }

  }, [currentCategoryList, sort])

  return sortedBooks
}

function useCategories(listBooks, query, category) {

  const searchBooks = useSearchBooks(listBooks, query)
  const currentCategoryList = useMemo(() => {
    if (category && category !== 'all') {
      return searchBooks.filter((book) => book.category === category)
    }
    return searchBooks
  }, [searchBooks, category])

  return currentCategoryList
}

function useSearchBooks(listBooks, query) {

  const foundBooks = useMemo(() => {

    if (query) {
      return listBooks.filter((book) => book.bookName.toLowerCase().includes(query.toLowerCase()))
    }
    return listBooks
  }, [listBooks, query])

  return foundBooks
}