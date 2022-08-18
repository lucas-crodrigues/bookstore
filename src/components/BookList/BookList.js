import PropTypes from 'prop-types';
import Book from '../Book/Book';

const BookList = ({ booksList }) => (
  <div className="bookList">
    { booksList.map((book) => <Book key={`b_${book.item_id}`} item_id={book.item_id} title={book.title} author={book.author} category={book.category} />)}
  </div>
);

BookList.propTypes = {
  booksList: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
