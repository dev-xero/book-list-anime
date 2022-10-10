import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const NavBar = () => {
  const { books } = useContext(BookContext)

  return (
    <div className="navbar">
      <h1>Anime Watch List</h1>
      <p>Currently you have {books.length} anime to get through</p>
    </div>
  )
}

export default NavBar
