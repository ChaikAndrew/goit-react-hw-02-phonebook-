import s from './PhoneBookList.module.css';

const PhoneBookList = ({ contacts, ondeletePhoneBook }) => (
  <ul className={s.PhoneBookList__list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.PhoneBookList__item}>
        <p>{name}</p>
        <p>{number}</p>
        <button
          onClick={() => ondeletePhoneBook(id)}
          className={s.PhoneBookList__btn}
        >
          Delete contact
        </button>
      </li>
    ))}
  </ul>
);

export default PhoneBookList;
