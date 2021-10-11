import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import css from '../../components/Filter/Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={css.text}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={evt => dispatch(contactsActions.changeFilter(evt.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
