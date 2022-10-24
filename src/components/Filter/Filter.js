import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => filterSelector(state));
  //changeFilter
  const changeFilter = ev => {
    const inputValue = ev.currentTarget.value;
    dispatch(filterContact(inputValue));
  };

  return (
    <form className="ms-5">
      <label className="form-label">
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
          className="form-control"
        />
      </label>
    </form>
  );
};

export default Filter;
