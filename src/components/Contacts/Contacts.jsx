import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import css from '../Contacts/Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const onClick = id => dispatch(contactsActions.deleteContacts(id));

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li className={css.item} key={contacts.id}>
            <p className={css.text}>
              {contact.name}: {contact.number}
            </p>
            <button className={css.button} onClick={() => onClick(contact.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
