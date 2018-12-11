import React, { Component } from 'react';
import './App.css';
import './jQuery'
import { Navbar } from './Navbar';
import { MyFace } from './MyFace';
import { Projects } from './Projects';
import { BannerHeader } from './BannerHeader';
import { Languages } from './Languages';
import { EducationTimeline } from './EducationTimeline';
import { WorkTimeline } from './WorkTimeline';
import { Skills } from './Skills';
import { ContactMe } from './ContactMe';
import { AboutMe } from './AboutMe';

class App extends Component {  
  render() {
    return (
        <div className="App">
          <div id='main'>
            <div id='parallax'>
              <BannerHeader />
              <Languages />
              <MyFace />
            </div>
            <div id='aboutMeWrapper'>
                <AboutMe />
                </div>
            <Navbar id='navbar' />
              <div id='content'>  
                <div id='projectsWrapperOuter'>
                <h2 className='header2' id='hpr'>Projects</h2>              
                <Projects />
                </div>                
                <div id='skillsWrapper'>
                <h2 className='header2' id='hsk'>Skills</h2>
                <Skills />
                </div>
                <div id='timelineHeader'>
                  <h2 className='header2' id='hCV'>Curriculum Vitae</h2>
                </div>
                <div id='timelineWrapper'>
                  <div id='educationTimeline'>
                  <EducationTimeline />
                  </div>
                  <div id='workTimeline'>
                  <WorkTimeline />
                  </div>
                  <div id='faderWrapper'>
                    <div className='scrollFaderTop'></div>
                    <div className='scrollFaderBottom'></div>
                  </div>
                </div>
                <div id='contactMe'>
                <h2 className='header2' id='hcm'>Contact Me</h2>
                <ContactMe />
                </div>
              </div>
          </div>
        </div>
      );
    }
    
  }
      
export default App;


