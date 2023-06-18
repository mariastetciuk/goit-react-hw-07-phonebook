import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, getAllContacts } from './fetching';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', () => {
  addContact();
});

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

// const handleFulfilledAddContacts = (state, { payload }) => {
//   state.contacts.items = payload;
//   state.contacts.isLoading = false;
//   state.contacts.error = null;
// };

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts/fetchAll',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(getContactsThunk.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
