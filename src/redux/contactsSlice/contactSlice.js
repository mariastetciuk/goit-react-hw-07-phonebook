import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from './fetching';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

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
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
