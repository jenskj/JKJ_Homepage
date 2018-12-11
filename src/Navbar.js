import React from 'react';
import './Navbar.css';
import './App.css'
export class Navbar extends React.Component {
    render() {
        const jumpFix = {
            height: 56,
            
        }
        return (
        
            <div style={jumpFix}>
                <div id='navbar'>
                <ul>
                    <li>
                        <a href='parallax'>Home</a>
                    </li>
                    <li>
                        <a href='projectsWrapperOuter'>Projects</a>
                    </li>
                    <li>
                        <a href='skillsWrapper'>Skills</a>
                    </li>
                    <li>
                        <a href='timelineHeader'>Curriculum Vitae</a>
                    </li>
                    
                    <li>
                        <a href='contactMe'>Contact Me</a>
                    </li>
                </ul>
                </div>

            </div>
        )
    }
}