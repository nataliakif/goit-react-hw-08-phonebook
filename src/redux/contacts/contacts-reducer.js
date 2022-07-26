import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contacts-operations';
import { changeFilter } from './contacts-actions';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => {
    state.filter(({ id }) => id !== payload);
  },
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.pending]: () => null,
  [getContacts.rejected]:
    () =>
    (_, { payload }) =>
      payload,
});

export default combineReducers({ items, filter, isLoading, error });
