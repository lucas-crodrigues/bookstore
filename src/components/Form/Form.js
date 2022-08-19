import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Form.css';

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
    <div>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bTitle" placeholder="Book title..." onInput={(e) => setTitle(e.target.value)} />
        <input type="text" name="bAuthor" placeholder="Author..." onInput={(e) => setAuthor(e.target.value)} />
        <button type="submit" className="submitButton">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
