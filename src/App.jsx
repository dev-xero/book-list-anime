import React from 'react'
import NavBar from './components/NavBar'
import { BookContextProvider } from './context/BookContext'

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  )
}
