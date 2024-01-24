import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import * as contactsAPI from '../../services';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const handleContacts = state => state.contacts.items;
const handleIsLoading = state => state.contacts.isLoading;
const handleError = state => state.contacts.error;

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: '',
  },
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: creator => ({
    fetchContactsAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await contactsAPI.getContacts();
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items = payload;
        },
        rejected: handleRejected,
      }
    ),

    addContactAction: creator.asyncThunk(
      async (contact, { rejectWithValue }) => {
        try {
          return await contactsAPI.postContact(contact);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items.push(payload);
        },
        rejected: handleRejected,
      }
    ),

    deleteContactAction: creator.asyncThunk(
      async (id, { rejectWithValue }) => {
        try {
          return await contactsAPI.deleteContact(id);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePending,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items = state.contacts.items.filter(
            c => c.id !== payload.id
          );
        },
        rejected: handleRejected,
      }
    ),
  }),
  selectors: {
    getContacts: handleContacts,
    getIsLoading: handleIsLoading,
    getError: handleError,
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { fetchContactsAction, addContactAction, deleteContactAction } =
  contactsSlice.actions;
export const { getContacts, getIsLoading, getError } = contactsSlice.selectors;
