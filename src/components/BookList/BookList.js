import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './BookList.css';

const BookList = ({ booksList }) => (
  <div className="bookList">
    { booksList.map((book) => <Book key={`b_${book.id}`} item_id={book.id} title={book.title} author={book.author} category={book.category} />)}
  </div>
);

BookList.propTypes = {
  booksList: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
