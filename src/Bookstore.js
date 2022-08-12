import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Books from './Pages/Books';
import Categories from './Pages/Categories';

const Bookstore = () => (
  <DefaultLayout>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </DefaultLayout>
);

export default Bookstore;
