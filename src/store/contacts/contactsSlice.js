import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import * as contactsAPI from '../../services';

const hendlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const hendleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const hendleContacts = state => state.contacts.items;
const hendleIsLoading = state => state.contacts.isLoading;
const hendleError = state => state.contacts.error;

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
        pending: hendlePending,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items = payload;
        },
        rejected: hendleRejected,
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
        pending: hendlePending,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items.push(payload);
        },
        rejected: hendleRejected,
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
        pending: hendlePending,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items = state.contacts.items.filter(
            c => c.id !== payload.id
          );
        },
        rejected: hendleRejected,
      }
    ),
  }),
  selectors: {
    getContacts: hendleContacts,
    getIsLoading: hendleIsLoading,
    getError: hendleError,
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { fetchContactsAction, addContactAction, deleteContactAction } =
  contactsSlice.actions;
export const { getContacts, getIsLoading, getError } = contactsSlice.selectors;
