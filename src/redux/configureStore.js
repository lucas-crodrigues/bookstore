import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const storeReducer = configureStore({
  reducer: {
    books,
    categories,
  },
}, applyMiddleware(thunk));

export default storeReducer;
