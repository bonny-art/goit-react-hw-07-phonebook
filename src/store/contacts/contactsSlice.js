import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk, setContactThunk } from './contactsThunks';

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
    // addContactAction: {
    //   prepare: data => {
    //     const newTodo = {
    //       ...data,
    //       id: nanoid(),
    //     };
    //     return { payload: newTodo };
    //   },
    //   reducer: (state, { payload }) => {
    //     state.contacts.items.unshift(payload);
    //   },
    // },

    deleteContactAction: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(c => c.id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(setContactThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = '';
      })
      .addCase(setContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(setContactThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContactAction, deleteContactAction } = contactsSlice.actions;
