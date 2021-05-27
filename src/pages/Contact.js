import React from 'react';
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'

function Contact(props) {
  return (
    <div id='contact' className='contact'> 
      <div className='contactContainer'>
        <div className='contactHeader'>
          Contact...
        </div>
        <div className='contactSubheader'>
          Happy to connect, feel free to reach me via
        </div>
        <div className='contactOptions'>
          <div className='contactOption'>
            <a href='https://www.linkedin.com/in/binhb998/' >
              <FaIcons.FaLinkedin className='contactIcon' />
            </a>
            LinkedIn
          </div>
          <div className='contactOption'>
          <a href='mailto:lebinhb98@gmail.com' >
              <MdIcons.MdEmail className='contactIcon' />
            </a>
            Email
          </div>
        </div>
        <div className='backToTopBlock'>
          <a href='#home'><FaIcons.FaArrowCircleUp className='bttButton'/></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;