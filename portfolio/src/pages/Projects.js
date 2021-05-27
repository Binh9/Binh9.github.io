import React from 'react';
import covid from './../images/covid.png';
import gotcha from './../images/gotcha.png';
import apocalyse from './../images/apocalypseSim.png';
import deadline from './../images/deadline.png';
import * as AiIcons from 'react-icons/ai';

function Projects(props) {
  return (
    <div id='projects' className='projects'>
      <div className='projectsContainer'>
        <div className='projectHeader'>
          Projects...
        </div>
        <div className='projectCardsContainer'> 
          <div className='projectCard'>
            <img src={covid} alt='covd-19 dashboard ' className='imageProject'/>
            <div class='overlay projectDescription'>
              <div className='projectName'>
                COVID-19 Dashboard
              </div>
              <br/>
              <div className='projectDetails'>
                A dashboard with geovisualization map of COVID-19 related data across the world. Built with Python, Dash, Plotly.
                Deployed on <a href='https://covid19-dashboard-bl.herokuapp.com/'>heroku</a>
              </div>
            </div>
          </div> 
          <div className='projectCard'>
            <img src={gotcha} alt='gotcha' className='imageProject'/>
            <div class='overlay projectDescription'>
              <div className='projectName'>
                Gotcha!
              </div>
              <br/>
              <div className='projectDetails'>
                A code plagiarism detector for JavaScript programs. Written in TypeScript
              </div>
            </div>
          </div>
          <div className='projectCard'>
            <img src={apocalyse} alt='apocalyseSym' className='imageProject'/>
            <div class='overlay projectDescription'>
              <div className='projectName'>
                ApocalypseSim
              </div>
              <br/>
              <div className='projectDetails'>
                A text-based adventure game based on the stories of the apocalyptic films. Written in Python
              </div>
            </div>          
          </div>
          <div className='projectCard'>
            <img src={deadline} alt='deadline project' className='imageProject'/>
            <div class='overlay projectDescription'>              
              <div className='projectName'>
                Deadline
              </div>
              <br/>
              <div className='projectDetails'>
                A calendar management tool that would help students and professors to manage their deadlines. 
                Developed with Django framework
              </div>
            </div>
          </div>
        </div>
        <div className='githubBlock'>
          Feel free to visit my <a href='https://github.com/Binh9'>GitHub <AiIcons.AiOutlineGithub/></a> for more things I've worked on :)
        </div>
      </div>
    </div>
  );
}

export default Projects;