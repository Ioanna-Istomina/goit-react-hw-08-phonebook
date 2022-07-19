import s from './Filter.module.css';

const Filter = ({ changeFilter }) => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          onChange={ev => changeFilter(ev.currentTarget.value)}
          className={s.input}
        />
      </label>
    </form>
  );
};

export default Filter;
