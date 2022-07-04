import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDeleteContact = ev => {
    const id = ev.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  formSubmitHandler = contact => {
    const { name } = contact;
    const checkAddName = this.state.contacts.some(
      contact => contact.name === name
    );

    checkAddName
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
  };

  changeFilter = ev => {
    this.setState({ filter: ev.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localSt = JSON.parse(localStorage.getItem('contacts'));
    if (localSt) {
      this.setState({ contacts: localSt });
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <div>
        <h1 style={{ marginLeft: '40px' }}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2 style={{ marginLeft: '40px' }}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
