const ADD = 'BOOKSTORE/books/ADD';
const REMOVE = 'BOOKSTORE/books/REMOVE';
const FETCH = 'BOOKSTORE/books/FETCH';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QuMp8GsvtTpbGQVlti2B/books';

const booksList = [];

export default (state = booksList, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return state.filter((book) => book.item_id !== action.book.item_id);

    case FETCH:
      return action.payload;

    default:
      return state;
  }
};

export const addBook = (book) => async (dispatch) => {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  }).then(dispatch({
    type: ADD,
    book,
  }));
};

export const removeBook = (book) => async (dispatch) => {
  await fetch(`${BASE_URL}/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(dispatch({
    type: REMOVE,
    book,
  }));
};

export const getBooks = () => async (dispatch) => {
  const booksFetch = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((data) => data.json());

  const books = [];

  Object.keys(booksFetch).forEach((e) => {
    books.push({ ...booksFetch[e][0], item_id: e });
  });
  dispatch({
    type: FETCH,
    payload: books,
  });
};
