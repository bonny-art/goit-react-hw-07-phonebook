import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

import { Contact, Name, Number, DeleteButton } from './ContactsListItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/contactsOperations';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <Contact>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        <MdDeleteForever size={14} color={undefined} />
      </DeleteButton>
    </Contact>
  );
};
