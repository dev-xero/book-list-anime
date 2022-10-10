import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const NewBookForm = () => {
  const { handleAddBook } = useContext(BookContext)
  const [title, setTitle] = useState('')
	const [studio, setStudio] = useState('')
	
	const handleSubmit = (ev) => {
		ev.preventDefault()
		handleAddBook(title, studio)
	}

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="anime-title"
        placeholder="anime title"
				value={title}
				onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type="text"
        name="studio-name"
        placeholder="studio name"
				value={studio}
				onChange={ev => setStudio(ev.target.value)}
			/>
			<button type="submit">Add New Anime</button>
    </form>
  )
}

export default NewBookForm
