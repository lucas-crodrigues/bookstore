/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const {
    title, author, item_id,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <div>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={handleRemove}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
