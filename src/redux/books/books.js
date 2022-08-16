const ADD = 'BOOKSTORE/books/ADD';
const REMOVE = 'BOOKSTORE/books/REMOVE';

export default (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        title: action.title,
        author: action.author,
        id: action.id,
      },
      ];

    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (bookTitle, bookAuthor, bookId) => ({
  type: ADD,
  title: bookTitle,
  author: bookAuthor,
  id: bookId,
});

export const removeBook = (bookId) => ({ type: REMOVE, id: bookId });
