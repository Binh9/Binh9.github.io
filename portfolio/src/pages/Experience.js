import React from 'react';
import mmsLogo from './../images/mms.jpeg';
import wayfairLogo from './../images/wayfair.jpeg';
import khouryLogo from './../images/khoury.jpeg';

function Experience(props) {
  return (
    <div id='experience' className='experience'>
      <div className='experienceContainer'>
        <div className='experienceHeader'>
          My journey...
        </div>
        <div className='jobContainer'>
          <div className='companyLogo'>
            <img src={wayfairLogo} alt='wayfair logo' width={'100%'} height={'100%'} objectFit={'scale-down'}/>
          </div>
          <div className='jobDescription'>
            <div className='companyOverview'>
              <div className='companyName'>
                <b>Wayfair</b>, Boston, MA
              </div>
              <div className='workDates'>
                Jan. 2021 - Jun. 2021
              </div>
            </div>
            <div className='jobPosition'>
              <i>Software Engineer Intern</i>
            </div>
            <div className='responsibilities'>
              <ul>
                <li className='jobBullets'>
                  Built an integrated dashboard with Java and React that displays issues linked to the user leveraging third-party 
                  and internal APIs
                </li>
                <li className='jobBullets'>
                Collaborated with another engineer to develop a service informing thousands of employees in the Contact Centers and 
                Warehouses of the ongoing incidents; thus, streamlining their workflow
                </li>
                <li className='jobBullets'>
                  Coordinated with business user to migrate the Quality Assurance team from the in-house project tracking tool
                </li>
                <li className='jobBullets'>
                  Maintained internal applications written in PHP and JavaScript
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='jobContainer'>
          <div className='companyLogo'>
            <img src={khouryLogo} alt='khoury logo' width={'100%'} height={'100%'}/>
          </div>
          <div className='jobDescription'>
          <div className='companyOverview'>
              <div className='companyName'>
                Northeastern University, Boston, MA
              </div>
              <div className='workDates'>
                Sep. 2020 - Dec. 2020
              </div>
            </div>
            <div className='jobPosition'>
              <i>Teaching Assistant for Discrete Structures</i>
            </div>
            <div className='responsibilities'>
              <ul>
                <li className='jobBullets'>
                  Held weekly office hours to assist students with the course material and assignments
                </li>
                <li className='jobBullets'>
                  Graded students’ homework and exam submissions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='jobContainer'>
          <div className='companyLogo'>
            <img src={mmsLogo} alt='mms logo' width={'100%'} height={'100%'}/>
          </div>
          <div className='jobDescription'>
          <div className='companyOverview'>
              <div className='companyName'>
                Massachusetts Medical Society, Waltham, MA
              </div>
              <div className='workDates'>
                Jul. 2019 - Dec. 2019
              </div>
            </div>
            <div className='jobPosition'>
              <i>Quality Assurance Tester and Analyst</i>
            </div>
            <div className='responsibilities'>
              <ul>
                <li className='jobBullets'>
                  Wrote REST API test scripts in Java based on the user stories using Selenium with Cucumber and executed the test 
                  suits in Jenkins to verify the functionality of the company’s new unified commerce platform
                </li>
                <li className='jobBullets'>
                  Coordinated work of the offshore team members and managed the sprint backlog of automation test 
                  team to meet the deadline
                </li>
                <li className='jobBullets'>
                  Performed manual functional testing for multiple website components and functions based on test cases and 
                  specifications provided
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;