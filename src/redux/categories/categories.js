const STATUS = 'BOOKSTORE/books/STATUS';

export default (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS });
