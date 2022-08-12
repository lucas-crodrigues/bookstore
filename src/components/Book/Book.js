import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <span>{title}</span>
    <span>{author}</span>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
