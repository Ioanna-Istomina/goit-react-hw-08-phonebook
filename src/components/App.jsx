import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useGetContactsQuery } from '../redux/contactsAPI';
import { useAddContactsMutation } from '../redux/contactsAPI';

export const App = () => {
  const { data } = useGetContactsQuery();
  const [createContact] = useAddContactsMutation();

  const formSubmit = contact => {
    if (data.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    createContact(contact);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '40px' }}>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />

      <h2 style={{ marginLeft: '40px' }}>Contacts</h2>
      <Filter />
      {data && <ContactList />}
    </div>
  );
};
