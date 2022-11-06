import React, { Component } from 'react';
import PhoneBookList from './Phonebook/PhoneBookList/PhoneBookList';
import contactsList from 'components/contactsList.json';
class App extends Component {
  state = {
    contacts: contactsList,
    // name: '',
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
      <>
        <h1>Phonebook</h1>
        <p>Total number of contacts: {contacts.length}</p>
        <PhoneBookList
          contacts={contacts}
          ondeletePhoneBook={this.deletePhoneBook}
        />
      </>
    );
  }
}

export default App;
