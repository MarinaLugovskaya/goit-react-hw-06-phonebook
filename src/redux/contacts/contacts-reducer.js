import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContacts]: (state, action) => [...state, action.payload],
  [actions.deleteContacts]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, actions) => actions.payload,
});

export default combineReducers({
  items,
  filter,
});
