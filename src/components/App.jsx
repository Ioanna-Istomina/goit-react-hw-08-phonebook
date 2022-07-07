import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const onDeleteContact = ev => {
    const id = ev.currentTarget.id;
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const formSubmitHandler = contact => {
    const { name } = contact;
    const checkAddName = contacts.some(contact => contact.name === name);
    checkAddName
      ? alert(`${contact.name} is already in contacts.`)
      : setContacts(contacts => [...contacts, contact]);
  };

  const changeFilter = ev => {
    setFilter(ev.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div>
      <h1 style={{ marginLeft: '40px' }}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2 style={{ marginLeft: '40px' }}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
