import { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';

import s from './App.module.css';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

  const [filtered, setFiltered] = useState('');

  const addContacts = oneContact => {
    const { name } = oneContact;
    // console.log(name);
    // console.log(oneContact);
    if (contacts.some(contact => contact.name === name)) {
      toast.warn(`${name} is already in contacts`, {
        theme: 'colored',
      });
    } else {
      setContacts(prevContacts => [...prevContacts, oneContact]);
      toast.success(`The contact has been added`, {
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    // console.log('email useEffect');
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

  // console.log(contacts);

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

export default App;
