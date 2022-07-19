// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, filterContact } from './actions';
// import { combineReducers } from 'redux';

// export const contact = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [deleteContact]: (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload);
//   },
// });

// export const filter = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });

// export const rootReducer = combineReducers({
//   contact,
//   filter,
// });
