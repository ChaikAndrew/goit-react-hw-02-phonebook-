import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookList from './Phonebook/PhoneBookList/PhoneBookList';
import contactsList from 'components/contactsList.json';

import PhoneBookEditor from './Phonebook/PhoneBookEditor/PhoneBookEditor';
import Filter from './Phonebook/PhoneBookFilter/PhoneBookFilter';

class App extends Component {
  state = {
    contacts: contactsList,
    // name: '',
    filter: '',
    // number: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deletePhoneBook = contactsListId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactsListId
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBookEditor onSubmit={this.addContact} />
        <p>Total number of contacts: {contacts.length}</p>
        <Filter value={filter} onChange={this.changeFilter} />

        <PhoneBookList
          contacts={visibleContacts}
          ondeletePhoneBook={this.deletePhoneBook}
        />
      </div>
    );
  }
}

export default App;
