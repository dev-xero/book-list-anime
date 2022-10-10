import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/book.reducer'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
  const LOCAL_STORAGE_KEY = 'anime_to_watch'

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      : []
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}
