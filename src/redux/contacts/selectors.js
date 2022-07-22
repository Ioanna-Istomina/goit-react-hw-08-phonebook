export const contactSelector = state => state.contacts;
export const filterSelector = state => state.filter;

export const filterContacts = (state, contacts) => {
  const filter = filterSelector(state);
  const normalizeFilter = filter?.toLowerCase();
  return contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(normalizeFilter)
  );
};
