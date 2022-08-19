import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import BookList from '../components/BookList/BookList';
import Form from '../components/Form/Form';
import {
  getBooks,
  selectAllBooks,
  getBooksStatus,
  getBooksError,
} from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const bookList = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);

  React.useEffect(() => {
    if (booksStatus === 'initial') {
      dispatch(getBooks());
    }
  }, [booksStatus, dispatch]);

  let content;

  if (booksStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (booksStatus === 'succeed') {
    const keys = Object.keys(bookList[0]);
    const library = [];
    keys.forEach((element) => {
      library.push({
        id: element,
        author: bookList[0][element][0].author,
        title: bookList[0][element][0].title,
      });
    });
    content = <BookList booksList={library} />;
  } else if (booksStatus === 'fail') {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className="booksArea">
        {content}
      </div>
      <Form />
    </>
  );
};

export default Books;
