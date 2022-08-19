/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QuMp8GsvtTpbGQVlti2B/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const addBook = createAsyncThunk(
  'book/addBook',
  async (book) => {
    try {
      const response = await axios.post(BASE_URL, book);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async (bookId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${bookId}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  books: [],
  status: 'initial',
  error: null,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.books = [...state.books, action.payload];
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, () => {
        window.location.reload(false);
      })
      .addCase(removeBook.fulfilled, () => {
        window.location.reload(false);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default bookSlice.reducer;
