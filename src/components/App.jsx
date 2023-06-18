import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>

      {items.length === 0 ? <span>Phonebook is still empty</span> : <Filter />}
      {isLoading === true && <span>Loading, please wait...</span>}
      <ContactList />
      {error !== null && <span>Oops, try again</span>}
    </div>
  );
};
