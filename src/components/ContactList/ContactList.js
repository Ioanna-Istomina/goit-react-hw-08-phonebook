import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/selectors';
import { deleteContact } from 'redux/actions';

const ContactList = () => {
  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();

  const onDeleteContact = ev => {
    const id = ev.currentTarget.id;

    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.length === 0 ? (
        'Phone book is empty'
      ) : (
        <ul className={s.list}>
          {contacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>
                {name}: <span>{number}</span>
                <IconButton
                  aria-label="delete"
                  id={id}
                  onClick={onDeleteContact}
                >
                  <DeleteIcon />
                </IconButton>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
