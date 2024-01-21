import React from 'react';

import { ContactsListItem } from 'components';

import { ContactsListContainer } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <ContactsListContainer>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={phone}
          ></ContactsListItem>
        );
      })}
    </ContactsListContainer>
  );
};
