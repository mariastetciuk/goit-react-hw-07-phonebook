import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { deleteContacts } from 'redux/contactsSlice/contactSlice';
// import { getContacts, getFilterValue } from 'redux/selectors';
import { getContactsThunk } from 'redux/contactsSlice/contactSlice';

export function ContactList() {
  // const contact = useSelector(getContacts);
  // const filter = useSelector(getFilterValue);

  const { items } = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // const filterContact = () => {
  //   return items.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // const contacts = filterContact();
  const contacts = items;

  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li className={css.contacts__item} key={id}>
            {name}: <span className={css.contacts__span}>{phone}</span>
            <button
              className={css.contacts__btn}
              type="button"
              // onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
