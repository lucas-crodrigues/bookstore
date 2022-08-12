import BookList from '../components/BookList/BookList';
import Form from '../components/Form/Form';

const Books = () => (
  <div>
    <BookList booksList={[{ title: 'The Alchemist', author: 'Paulo Coelho', id: 1 }]} />
    <Form />
  </div>
);

export default Books;
