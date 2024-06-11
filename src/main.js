import React, { useState } from 'react';
import ModalForm from './modalForm';

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='container'>

      <div className='overlay'>
        <img className='logo' src='https://ecis.in/star-estate-webinar/assets/logo-starestate.png' alt='' />
        <div className='heading'>
          <h1 className='text'>Mumbai & Pune </h1>
          <span className='subheading'>Property Investors </span>
          <span className='subheading webinar'>Webinar</span>
          <span className='border'>Date: 14th June | Time: 10:30AM To 11:30AM</span>
        </div>

        <div className='description'>
          <span className='attraction'>Special Attraction</span>
          <span className='subheading border-bottom'>Goderej New launch Plots & Apartments</span>
          <span className='subheading'>Starting at ₹54 Lakhs</span>
          <button className='register-button' onClick={handleRegisterClick}>REGISTER NOW</button>

        </div>
      </div>
      {/* <img className='image-hero' src='https://ecis.in/star-estate-webinar/assets/image1.jpg' alt='Event' /> */}
      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}

export default Main;