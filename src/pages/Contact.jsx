import React, { useState } from "react";
import './Contact.css';

const Form = () => {
  const [fname, setFname] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    fname: '',
    mail: '',
    phone: '',
    message: ''
  });

  const errorMessage = [
    'Full name has to be in a valid format',
    'Email has to be in a valid format',
    'Phone number has to be in a valid format',
    'Message cannot be empty'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fname') setFname(value);
    if (name === 'mail') setMail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'message') setMessage(value);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!fname || !/^[a-zA-Z\s]+$/.test(fname)) {
      formErrors.fname = errorMessage[0];
      isValid = false;
    }

    if (!mail || !/\S+@\S+\.\S+/.test(mail)) {
      formErrors.mail = errorMessage[1];
      isValid = false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      formErrors.phone = errorMessage[2]; 
      isValid = false;
    }

    if (!message) {
      formErrors.message = errorMessage[3];
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      const formData = {
        fname,
        mail,
        phone,
        message
      };
      console.log('Podaci sa forme:', formData); 
    } else {
      console.log('Greške u formi:', errors);
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">Full Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={handleInputChange}
            required
          />
          {errors.fname && <div className="error">{errors.fname}</div>}
        </div>

        <div>
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={mail}
            onChange={handleInputChange}
            required
          />
          {errors.mail && <div className="error">{errors.mail}</div>}
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            required
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          ></textarea>
          {errors.message && <div className="error">{errors.message}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
