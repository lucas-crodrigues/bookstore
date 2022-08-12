import PropTypes from 'prop-types';
import Book from '../Book/Book';

const BookList = ({ booksList }) => (
  <div className="bookList">
    { booksList.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
  </div>
);

BookList.propTypes = {
  booksList: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
