import React, { useEffect } from 'react';

import { ContactsList } from 'components';

import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'store/contacts';
import { ContactsListContainer } from 'components/ContactsList/ContactsList.styled';

export const Contacts = () => {
  const filter = useSelector(state => state.filter.filter);
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  //   console.log('items :>> ', items);
  //   console.log('isLoading :>> ', isLoading);
  //   console.log('error :>> ', error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContactsThunk());
  }, [dispatch]);

  const visibleContacts = items
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .toSorted((a, b) => a.name.localeCompare(b.name));

  return (
    <ContactsListContainer>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items && <ContactsList contacts={visibleContacts} />}
    </ContactsListContainer>
  );
};
