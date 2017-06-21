import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from './reducer_active_book.js';


const rootReducer = combineReducers({
  //combineReducers adds a key to our global application state called books: where the value is whatever gets returned
  //from the reducer_books.js
  books: BooksReducer,
  activeBook: ActiveBook //the key provided activeBook with its value will be provided on the global state
});

export default rootReducer;
