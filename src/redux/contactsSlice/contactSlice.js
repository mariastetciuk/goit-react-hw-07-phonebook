import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, getAllContacts } from './fetching';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', () => {
  addContact();
});

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledAddContacts = (state, { payload }) => {
  console.log(payload);
  // state.items.push(payload);
  // state.isLoading = false;
  // state.error = null;
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
      .addCase(addContactThunk.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
