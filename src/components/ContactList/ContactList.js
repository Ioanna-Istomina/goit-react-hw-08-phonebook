import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.length === 0 ? (
      'Phone book is empty'
    ) : (
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
              <IconButton aria-label="delete" id={id} onClick={onDeleteContact}>
                <DeleteIcon />
              </IconButton>
            </p>
          </li>
        ))}
      </ul>
    )}
  </>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
