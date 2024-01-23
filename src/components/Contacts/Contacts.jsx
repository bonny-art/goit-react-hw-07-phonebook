import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsList } from 'components';
import { fetchContactsAction } from 'store';

import {
  ContactsListContainer,
  Message,
} from 'components/ContactsList/ContactsList.styled';
import { getFilteredContacts, getIsLoading, getError } from 'store';
// import { getContacts } from 'store';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  // const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const sortedContacts = contacts.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ContactsListContainer>
      {isLoading && <Loader />}
      {error && <Message>{error}</Message>}
      {contacts && <ContactsList contacts={sortedContacts} />}
    </ContactsListContainer>
  );
};
