import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContacts = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

export default { addContacts, deleteContacts, changeFilter };
