import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser, contactsSlice } from './contactsSlice/contactSlice';
import { filterSlice } from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterSlice.reducer,
  },
});
