import React from 'react';
import avatar from './../images/avatar.jpeg';
import resume from './../images/BinhLe.pdf';

const ABOUT_ME = 'Hello! I\'m an aspiring software engineer. Soon to be a graduate from Northeastern University (August 2022). '
      + 'I like learning about new tech, and I believe that the only limitation to its capabilities is our own imagination.';

const LIKES = 'My hobbies include doing sports. I\'ve played basketball, volleyball, and tennis. Now, I\'m mostly playing soccer '
      + '(left-back). I hike from time to time and enjoy traveling and learning about different cultures as well.';

const UPDATE = 'Currently, I\'m seeking a full-time software engineering opportunity in the Boston area. Feel free to contact me '
      + 'if you think I\'m a good fit.';

function AboutMe(props) {
  return (
    <div id='aboutme' className='aboutme'>
      {/* <h1>About Me</h1> */}
      <div className='aboutMeContainer'>
        <div className='leftSide'>
          <img className='avatar' src={avatar} alt='my face' width={'200px'}/>
          <h2>Binh Le</h2>
          <div className='emailBlock'>
            <a href='mailto:lebinhb98@gmail.com' > > lebinhb98@gmail.com</a>
          </div>
          <div className='resumeBlock'>
            <a href={resume} target='_blank'> > Resume</a>
          </div>
          
        </div>
        <div className='rightSide'>
          <h2> A bit about me</h2>
          <div className='stats'>
            <p>> Name: Binh</p>
            <p>> Age: 22</p>
            <p>> Occupation: Student</p>
            <p>> Education: Northeastern University</p>
            <p>> Major: Computer and Information Science</p>
            <p>> Based in: Boston, MA</p>
            <p>> From: Moscow, Russia</p>
            <p>> Roots: Vietnamese</p>
          </div>
          <div className='intro'>
            {ABOUT_ME}
            <br/>
            <br/>
            {LIKES}
          </div>
          <div className='currentStatus'>
            <h3>Current Status</h3>
            <div className='update'>
              {UPDATE}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;