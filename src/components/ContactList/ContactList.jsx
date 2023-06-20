import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const { items } = useSelector(getContacts);

  const filterContact = () => {
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contacts = filterContact();

  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li className={css.contacts__item} key={id}>
            {name}: <span className={css.contacts__span}>{phone}</span>
            <button
              className={css.contacts__btn}
              type="button"
              onClick={() => {
                console.log(id, name, phone);
                dispatch(deleteContactThunk(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
