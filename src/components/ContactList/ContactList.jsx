import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';
import { getContacts, getFilterValue } from 'redux/selectors';

export function ContactList() {
  const contact = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const filterContact = () => {
    return contact.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contacts = filterContact();

  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contacts__item} key={id}>
            {name}: <span className={css.contacts__span}>{number}</span>
            <button
              className={css.contacts__btn}
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
