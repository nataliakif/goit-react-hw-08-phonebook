import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <label className={styles['InputForm__label']} htmlFor={filter}>
      Find contacts by name
      <input
        className={styles['InputForm__input']}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
