import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  getContactsThunk,
  deleteContactThunk,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledAddContacts = (state, { payload }) => {
  state.items.push(payload);
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledDeleteContacts = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload);
  state.items.splice(index, 1);
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContacts)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContacts)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
