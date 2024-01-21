import React, { useEffect } from 'react';

import { ContactsList } from 'components';

import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'store/contacts';

export const Contacts = () => {
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  console.log('items :>> ', items);
  console.log('isLoading :>> ', isLoading);
  console.log('error :>> ', error);

  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.setContactsAction()), [dispatch]);

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {items && <ContactsList contacts={visibleContacts} />}
    </>
  );
};
