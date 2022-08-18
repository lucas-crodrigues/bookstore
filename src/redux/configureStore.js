import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

const storeReducer = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default storeReducer;