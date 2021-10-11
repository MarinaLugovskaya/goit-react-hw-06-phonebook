import shortid from 'shortid';
import types from './contacts-types';

const addContacts = (name, number) => ({
  type: types.ADD_CONTACTS,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContacts = contactId => ({
  type: types.DELETE_CONTACTS,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContacts, deleteContacts, changeFilter };
