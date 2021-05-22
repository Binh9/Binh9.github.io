import React from 'react';

function Contact(props) {
  return (
    <div id='contact' className='contact'> 
      <div className='contactContainer'>
        <h2>Contact</h2>  
        <h2>I am happy to connect, feel free to reach me via</h2>
        <div className='contactOptions'>
          <div className='contactOption'>
            LinkedIn
          </div>
          <div className='contactOption'>
            Email 
          </div>
        </div>
        <div className='backToTopBlock'>
          <button>Back to Top</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;