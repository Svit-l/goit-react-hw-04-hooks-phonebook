import React, { Component } from 'react';
import GlobalStyle from '../Common/GlobalStyles';
import { nanoid } from 'nanoid';
// import ContactForm from '../ContactForm';
// import Filter from '../Filter';
// import ContactList from '../ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    // number: '',
  };

  id = nanoid();

  GenerateID = id => {
    console.log(id);
  };

  AddContact = () => {
    this.setState((...prevState) => {
      console.log(prevState);
    });
  };

  render() {
    return (
      <div className={s.container}>
        <GlobalStyle />

        <form>
          <h1>Phonebook</h1>
          {/* <ContactForm /> */}

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h2>Contacts</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {/* <Filter />
          <ContactList /> */}
        </form>
      </div>
    );
  }
}

export default App;
