import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookList from './Phonebook/PhoneBookList/PhoneBookList';
import contactsList from 'components/contactsList.json';

import PhoneBookEditor from './Phonebook/PhoneBookEditor/PhoneBookEditor';

class App extends Component {
  state = {
    contacts: contactsList,
    name: '',
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

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBookEditor onSubmit={this.addContact} />
        <p>Total number of contacts: {contacts.length}</p>

        <PhoneBookList
          contacts={contacts}
          ondeletePhoneBook={this.deletePhoneBook}
        />
      </div>
    );
  }
}

export default App;
