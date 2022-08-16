const STATUS = 'BOOKSTORE/books/STATUS';

export default (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return [action.text];
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS, text: 'Under construction' });
