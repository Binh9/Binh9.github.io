import React from 'react';
// import avatar from 'avatar.jpeg';

function AboutMe(props) {
  return (
    <div id='aboutme' className='aboutme'>
      {/* <h1>About Me</h1> */}
      <div className='aboutMeContainer'>
        <div className='leftSide'>
          Proifle picture + resume + email
          <img className='avatar' src={require('./avatar.jpeg')} alt='my face' width={'200px'}/>
        </div>
        <div className='rightSide'>
          About Me
        </div>
      </div>
    </div>
  );
}

export default AboutMe;