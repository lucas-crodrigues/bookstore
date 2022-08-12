import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import BookList from './components/BookList/BookList';
import Categories from './Pages/Categories';

const Bookstore = () => {
  <DefaultLayout>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </DefaultLayout>;
};

export default Bookstore;
