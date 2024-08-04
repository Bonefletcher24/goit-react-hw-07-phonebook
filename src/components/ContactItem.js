import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      {contact.name} - {contact.phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
