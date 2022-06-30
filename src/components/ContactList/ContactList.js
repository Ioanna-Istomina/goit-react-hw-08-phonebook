import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={nanoid()}>
        <p>{contact.name}</p>
      </li>
    ))}
  </ul>
);

export default ContactList;
