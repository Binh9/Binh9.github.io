import React from 'react';

function Home() {
  return (
    <div id='home' className='home'>
      <div className='nav-bar'>
        <a class='logo' href='#home'>BL</a>
        <ul>
          <li>
            <a href='#aboutme'>About Me</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='hey-message'>
        <h2>Hey, I'm</h2>
        <h1>Binh Le</h1>
      </div> 
    </div>
  )
}

export default Home
