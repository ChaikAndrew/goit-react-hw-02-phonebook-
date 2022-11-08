import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookList from './Phonebook/PhoneBookList/PhoneBookList';
import PhoneBookEditor from './Phonebook/PhoneBookEditor/PhoneBookEditor';
import Filter from './Phonebook/PhoneBookFilter/PhoneBookFilter';
import contactsList from 'components/contactsList.json';
import s from './Container.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToast } from './helper';

class App extends Component {
  state = {
    contacts: contactsList,
    filter: '',
  };

  addContact = (name, number) => {
    const findName = this.state.contacts.find(contact => contact.name === name);

    if (name === '') {
      customToast(`Field name is empty`, 'error');
      return;
    }

    if (number === '') {
      customToast(`Field number is empty`, 'error');
      return;
    }

    if (findName !== undefined) {
      customToast(
        `Contact name "${name}" is already in the contact list`,
        'warning'
      );
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      customToast(`Contact "${name}" has been add`, 'success');
    }
  };

  deletePhoneBook = contactsListId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactsListId
      ),
    }));
    customToast(`Contact has been deleted`, 'success');
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className={s.Phonebook__container}>
        <h1 className={s.Phonebook__title}>Phonebook</h1>
        <PhoneBookEditor onSubmit={this.addContact} />
        <p className={s.Contacts__sum}>
          Total number of contacts: {contacts.length}
        </p>
        <Filter value={filter} onChange={this.changeFilter} />

        <PhoneBookList
          contacts={visibleContacts}
          ondeletePhoneBook={this.deletePhoneBook}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
