import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contacts-actions';
import css from '../../../src/style.module.css';

export default function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name === '' || number === '') {
      return alert('fill out the form');
    }

    dispatch(contactsActions.addContacts(name, number));
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.signin}>
        <input
          className={css.signinInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="name"
        />

        <input
          className={css.signinInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="number"
        />

        <button className={css.signinButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
};

// const mapStateToProps = state => ({
//   contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(contactsActions.addContacts(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
