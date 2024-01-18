import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      prepare: data => {
        const newTodo = {
          ...data,
          id: nanoid(),
        };
        return { payload: newTodo };
      },
      reducer: (state, { payload }) => {
        state.contacts.items.unshift(payload);
      },
    },

    deleteContactAction: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(c => c.id !== payload);
    },
    // setContactsAction: (state, { payload }) => {
    //   state.contacts.contacts = payload;
    // },

    fetchContactsStart: state => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    },

    fetchContactsSuccess: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.items = payload;
    },

    fetchContactsError: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {
  addContactAction,
  deleteContactAction,
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsError,
} = contactsSlice.actions;
