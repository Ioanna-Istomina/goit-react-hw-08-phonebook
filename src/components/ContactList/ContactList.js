import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/selectors';
import { useDeleteContactMutation, useGetContactsQuery } from '../../redux/API';

const ContactList = () => {
  const { data: allContacts } = useGetContactsQuery();
  const contacts = useSelector(state => filterContacts(state, allContacts));
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {contacts?.length === 0 ? (
        'Phone book is empty'
      ) : (
        <ul className={s.list}>
          {contacts?.map(({ name, phone, id }) => (
            <li key={id}>
              <p>
                {name}: <span>{phone}</span>
                <IconButton
                  aria-label="delete"
                  id={id}
                  onClick={() => deleteContact(id)}
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
