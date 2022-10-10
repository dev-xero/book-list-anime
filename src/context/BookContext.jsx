import React, { createContext, useReducer } from 'react'
import { bookReducer } from '../reducers/book.reducer'

export const BookContext = createContext()

export const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [])

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{ children }
		</BookContext.Provider>
	)
}
