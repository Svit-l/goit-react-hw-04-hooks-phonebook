import React, { Component } from 'react';
import s from './App.module.css';

import ContactForm from '../ContactForm';

// import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [
      {
        id: 2811,
        name: 'Moore Hensley',
        number: '5555522',
      },
      {
        id: 3821,
        name: 'Sharlene Bush',
        number: '5555523',
      },
    ],
  };

  formSubmitHandling = data => {
    // const { id, name, number } = ref;
    this.addContacts(data);
    // console.log(data);
    // console.log(id, name, number);
  };

  addContacts = data => {
    // this.setState(prevState => {
    // prevState.contacts.push({
    //   id: data.id,
    //   name: this.state.name,
    //   number: this.state.number,
    // });
    console.log(data);
    // });
  };

  render() {
    let formSubmitData = this.formSubmitHandling();
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandling} />
        {/* {console.log(formSubmitData)} */}
        <h2>Contacts</h2>
        {!formSubmitData ? (
          <p>You haven't contacts</p>
        ) : (
          <ContactList dataObject={formSubmitData} />
        )}
        {/* <ul>
          {this.data ? <li>{formSubmitData}</li> : <p>You haven't contacts</p>}
        </ul> */}
        {/* <Filter /> */}
      </div>
    );
  }
}

export default App;

// +++++++++++++++++++++++++++

// handleInputChange = e => {
//   console.log(e.currentTarget);
//   console.log(e.currentTarget.name);
//   console.log(e.currentTarget.value);
//   this.setState({ name: e.currentTarget.value.trim() });
//   this.setState({ [e.currentTarget.name]: e.currentTarget.value.trim() });
// };
