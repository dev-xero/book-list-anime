import React from 'react'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import NewBookForm from './components/NewBookForm'
import { BookContextProvider } from './context/BookContext'

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  )
}