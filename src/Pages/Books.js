import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import BookList from '../components/BookList/BookList';
import Form from '../components/Form/Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const BooksList = useSelector((state) => state.books);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <BookList booksList={BooksList} />
      <Form />
    </div>
  );
};

export default Books;
