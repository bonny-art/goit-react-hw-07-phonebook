import React, { useEffect } from 'react';

import { ContactsListItem } from 'components';

import { ContactsListContainer } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'store/contacts';

export const ContactsList = () => {
  const state = useSelector(state => state.contacts);
  console.log('state :>> ', state);
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.setContactsAction()), [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactsListContainer>
      {visibleContacts.map(({ id, name, phone }) => {
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
