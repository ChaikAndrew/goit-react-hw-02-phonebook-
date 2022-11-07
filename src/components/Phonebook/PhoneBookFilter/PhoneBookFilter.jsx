import s from './PhoneBookFilter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.Search__form}>
    <p className={s.Search__title}>Search by name:</p>

    <input
      className={s.Search__input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter contact name"
    ></input>
  </label>
);

export default Filter;
