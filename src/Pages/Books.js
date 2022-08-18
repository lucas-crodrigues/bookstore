import { useSelector } from 'react-redux/es/exports';
import BookList from '../components/BookList/BookList';
import Form from '../components/Form/Form';

const Books = () => {
  const BooksList = useSelector((state) => state.books);

  return (
    <div>
      <BookList booksList={BooksList} />
      <Form />
    </div>
  );
};

export default Books;
