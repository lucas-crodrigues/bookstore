import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(e.target.bTitle.value, e.target.bAuthor.value, uuidv4()));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        Add New Book
      </h3>
      <input type="text" name="bTitle" placeholder="Book title..." />
      <input type="text" name="bAuthor" placeholder="Author..." />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
