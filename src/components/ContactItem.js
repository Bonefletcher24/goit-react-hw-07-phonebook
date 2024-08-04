import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import './ContactItem.css'; // Импорт стилей

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="contact-item">
      {contact.name} - {contact.phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;