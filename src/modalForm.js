import React, { useState } from 'react';
import './modal.css';

function ModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.success) {
        console.log('Success:', data);
        alert('Email sent successfully!');
        window.location.reload();
      } else {
        throw new Error(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send email. Please try again.');
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='register'>Register Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button className="submit" type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
