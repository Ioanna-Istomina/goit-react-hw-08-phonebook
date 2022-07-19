import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useGetContactsQuery } from '../redux/contactsAPI';

export const App = () => {
  const { data } = useGetContactsQuery();
  return (
    <div>
      <h1 style={{ marginLeft: '40px' }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ marginLeft: '40px' }}>Contacts</h2>
      <Filter />
      {data && <ContactList contacts={data} />}
    </div>
  );
};
