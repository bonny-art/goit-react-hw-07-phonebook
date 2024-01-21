import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsAPI from '../../services';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsAPI.getAllContacts();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const setContactThunk = createAsyncThunk(
  'contacts/setContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await contactsAPI.postContact(contact);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
