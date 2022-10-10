import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_ANIME', id: book.id })}>
      <div className="title">Title: {book.title}</div>
      <div className="author">Studio: {book.studio}</div>
    </li>
  )
}

export default BookDetails
