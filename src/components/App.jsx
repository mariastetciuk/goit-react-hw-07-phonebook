import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contactsSlice/contactSlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {<Filter />}
      <ContactList />
    </div>
  );
};
