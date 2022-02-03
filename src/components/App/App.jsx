import { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import s from './App.module.css';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

export default function App() {
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
    const { name } = oneContact;
    // console.log(name);
    // console.log(oneContact);
    contacts.some(contact => contact.name === name)
      ? toast.warn(`${name} is already in contacts`, {
          theme: 'colored',
        })
      : setContacts(prevContacts => [...prevContacts, oneContact]);
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

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFiltered(value);
  };

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filtered.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  }, [filtered, contacts]);

  const deleteContact = contactId => {
    const result = window.confirm('Are you sure? Contact cannot be restored!');
    result
      ? setContacts(prevContacts => {
          toast.success(`The contact has been deleted`, {
            theme: 'colored',
          });
          return prevContacts.filter(contact => contact.id !== contactId);
        })
      : toast.warn(`The contact has not been deleted`, {
          theme: 'colored',
        });
  };

  console.log(contacts);

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
              contacts={getFilteredContacts}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </div>
    </div>
  );
}
