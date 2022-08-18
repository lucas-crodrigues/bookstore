import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [titleValue, setTitle] = React.useState('');
  const [authorValue, setAuthor] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title: titleValue,
      author: authorValue,
      category: 'Fiction',
    }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        Add New Book
      </h3>
      <input type="text" name="bTitle" placeholder="Book title..." onInput={(e) => setTitle(e.target.value)} />
      <input type="text" name="bAuthor" placeholder="Author..." onInput={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
