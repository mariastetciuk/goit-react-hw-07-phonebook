import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

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
        value={filter}
        onChange={hendleFilterChange}
      />
    </label>
  );
}
