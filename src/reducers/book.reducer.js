import { v4 as uuid } from 'uuid'

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ANIME':
      return [
        { title: action.book.title, studio: action.book.studio, id: uuid() },
        ...state,
			]
		case 'REMOVE_ANIME':
			return state.filter(book => book.id !== action.id )
		default: 
			return state
  }
}
