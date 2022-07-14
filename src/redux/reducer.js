import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';
import { combineReducers } from 'redux';

export const contact = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

export const filter = createReducer('', {
  [filterContact]: (state, { payload }) => state.filter(payload),
});

export const rootReducer = combineReducers({
  contact,
  filter,
});
