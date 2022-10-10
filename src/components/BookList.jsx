import React, { useContext } from 'react'
import BookDetails from '../components/BookDetails'
import { BookContext } from '../context/BookContext'

const BookList = () => {
  const { books } = useContext(BookContext)

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No Anime to Checkout</div>
  )
}

export default BookList
