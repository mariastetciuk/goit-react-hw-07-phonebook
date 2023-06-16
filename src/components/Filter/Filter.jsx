import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const hendleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <label className={css.label} htmlFor="">
      Find contacts by me
      <input
        className={css.label}
        type="text"
        name="filter"
        onChange={hendleFilterChange}
      />
    </label>
  );
}
