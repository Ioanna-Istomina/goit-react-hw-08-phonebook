import { createSelector } from '@reduxjs/toolkit';

export const contactSelector = state => state.contact;
export const filterSelector = state => state.filter;

export const filterContacts = createSelector(
  contactSelector,
  filterSelector,
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
