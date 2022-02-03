import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import s from './App.module.css';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

export default function App(oneContact) {
  // const { name, number, id } = oneContact;

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: '2811', name: 'Moore Hensley', number: '555-55-22' },
    { id: '3821', name: 'Sharlene Bush', number: '555-55-23' },
    { id: '4421', name: 'Nansy Button', number: '455-55-67' },
  ]);

  const [filtered, setFiltered] = useState('');

  const addContacts = oneContact => {
    const { name, number, id } = oneContact;

    console.log(contacts);
    console.log(name);
    console.log(oneContact);
    // const newContacts = setContacts(prevContacts => [
    //   ...prevContacts,
    //   oneContact,
    // ]);
    // console.log(newContacts);
    // contacts.some(contact => contact.name === name)
    //   ? alert(`${name} is already in contacts`)
    //   : setContacts(() => [...contacts, oneContact]);
  };

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  // componentDidMount() {
  //   // console.log('Component App didMount');
  //   const contacts = localStorage.getItem('contacts');
  //   // console.log(contacts);
  //   const parseContacts = JSON.parse(contacts);
  //   // console.log(parseContacts);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   // console.log('App didUpdate');
  //   if (this.state.contacts !== prevState.contacts) {
  //     // console.log('обновилось');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  const deleteContact = contactId => {
    // console.log(contactId);
    const result = window.confirm('Are you sure? Contact cannot be restored!');
    result
      ? setContacts(prevContacts => {
          prevContacts.filter(contact => contact.id !== contactId);
        })
      : alert('The contact has not been deleted!');
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFiltered(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filtered.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <div className={s.contactList}>
        {contacts.length === 0 ? (
          <p>Your phone book is empty, enter your first contact!</p>
        ) : (
          <>
            <h2 className={s.subtitle}>Contacts</h2>
            <Filter value={filtered} event={changeFilter} />
            <ContactList
              contacts={getFilteredContacts()}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </div>
    </div>
  );
}

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// import s from './App.module.css';

// import ContactForm from '../ContactForm';
// import Filter from '../Filter';
// import ContactList from '../ContactList';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       { id: '2811', name: 'Moore Hensley', number: '555-55-22' },
//       { id: '3821', name: 'Sharlene Bush', number: '555-55-23' },
//       { id: '4421', name: 'Nansy Button', number: '455-55-67' },
//     ],
//     filter: '',
//   };

//   addContacts = ({ name, number }) => {
//     const { contacts } = this.state;
//     const contact = {
//       name,
//       number,
//       id: nanoid(),
//     };

//     contacts.some(contact => contact.name === name)
//       ? alert(`${name} is already in contacts`)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, contact],
//         }));
//   };

//   deleteContact = contactId => {
//     const { contacts } = this.state;
//     const result = window.confirm('Are you sure? Contact cannot be restored!');
//     result
//       ? this.setState({
//           contacts: contacts.filter(contact => contact.id !== contactId),
//         })
//       : alert('The contact has not been deleted!');
//   };

//   changeFilter = e => {
//     const { value } = e.currentTarget;
//     this.setState({ filter: value });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidMount() {
//     // console.log('Component App didMount');
//     const contacts = localStorage.getItem('contacts');
//     // console.log(contacts);
//     const parseContacts = JSON.parse(contacts);
//     // console.log(parseContacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     // console.log('App didUpdate');
//     if (this.state.contacts !== prevState.contacts) {
//       // console.log('обновилось');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     // console.log('App render');
//     const { addContacts, changeFilter, deleteContact } = this;
//     const { contacts, filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div className={s.container}>
//         <h1 className={s.title}>Phonebook</h1>
//         <ContactForm onSubmit={addContacts} />
//         <div className={s.contactList}>
//           {contacts.length === 0 ? (
//             <p>Your phone book is empty, enter your first contact!</p>
//           ) : (
//             <>
//               <h2 className={s.subtitle}>Contacts</h2>
//               <Filter value={filter} event={changeFilter} />
//               <ContactList
//                 contacts={filteredContacts}
//                 onDeleteContact={deleteContact}
//               />
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// +++++++++++++++++++++++++++

// handleInputChange = e => {
//   console.log(e.currentTarget);
//   console.log(e.currentTarget.name);
//   console.log(e.currentTarget.value);
//   this.setState({ name: e.currentTarget.value.trim() });
//   this.setState({ [e.currentTarget.name]: e.currentTarget.value.trim() });
// };
