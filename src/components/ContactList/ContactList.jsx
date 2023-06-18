import { getContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export function ContactList() {
  // const filter = useSelector(getFilterValue);

  const { items } = useSelector(getContacts);

  // const filterContact = () => {
  //   return items.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // const contacts = filterContact();

  return (
    <ul className={css.contacts__list}>
      {items.map(({ id, name, phone }) => {
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
