import React from 'react';
import s from '../App/App.module.css';
import OneContact from '../OneContact';

const ContactList = dataObject => {
  return !dataObject ? (
    <p>You haven't contacts</p>
  ) : (
    <ul className={s.contactList}>
      {dataObject.map(d => {
        return <OneContact key={d.id} name={d.name} number={d.number} />;
      })}
    </ul>
  );
};

export default ContactList;
