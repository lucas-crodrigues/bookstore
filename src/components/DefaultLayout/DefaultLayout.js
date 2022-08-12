import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => (
  <section>
    <header>
      <h1>
        Bookstore CMS
      </h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer
      style={{
        backgroundColor: 'gray',
        borderTop: '1px solid black',
        height: '25px',
      }}
    />
  </section>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
