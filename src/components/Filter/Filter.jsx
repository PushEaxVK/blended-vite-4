import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleFilter}
    />
  );
};

export default Filter;
