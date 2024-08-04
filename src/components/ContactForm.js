import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      dispatch(addContact({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
