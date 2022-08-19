import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p className="message">{useSelector((state) => state.categories)}</p>
      <button className="cat-button" type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
