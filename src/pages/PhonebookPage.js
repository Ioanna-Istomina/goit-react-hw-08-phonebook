import ContactForm from '../components/ContactForm/';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { useGetContactsQuery, useAddContactsMutation } from '../redux/API';

const PhonebookPage = () => {
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
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />

      <h2 style={{ marginLeft: '40px' }}>Contacts</h2>
      <Filter />
      {data && <ContactList />}
    </div>
  );
};

export default PhonebookPage;
