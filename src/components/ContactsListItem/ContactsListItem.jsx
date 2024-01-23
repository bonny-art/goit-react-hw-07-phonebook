import React from 'react';
import { useDispatch } from 'react-redux';

import { MdDeleteForever } from 'react-icons/md';

import { deleteContactAction } from 'store';

import { Contact, Name, Number, DeleteButton } from './ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
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
