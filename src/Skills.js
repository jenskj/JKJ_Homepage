import React from 'react';
import './skills.css';

export class Skills extends React.Component {
    render() {
        return (
            <div id='skillsWrapper'>
                <div className="skillbar" data-percent="90%">
                <div className="skillbar-title" style={{background: '#d35400'}}>
                    <span>
                    <i className="devicon-html5-plain-wordmark"></i> HTML5
                    </span>
                </div>
                <div className="skillbar-bar" style={{background: '#e67e22'}}></div>
                <div className="skill-bar-percent">90%</div>
            </div> 

            <div className="skillbar" data-percent="70%">
                <div className="skillbar-title" style={{background: '#2980b9'}}>
                    <span>
                    <i className="devicon-css3-plain-wordmark"></i> CSS3
                    </span>
                </div>
                <div className="skillbar-bar" style={{background: '#3498db'}}></div>
                <div className="skill-bar-percent">70%</div>
            </div> 

            <div className="skillbar" data-percent="50%">
                <div className="skillbar-title" style={{background: '#90832f'}}>
                    <span>
                    <i className="devicon-javascript-plain"></i> JavaScript
                    </span>
                </div>
                <div className="skillbar-bar" style={{background: '#f0db4f'}}></div>
                <div className="skill-bar-percent">50%</div>
            </div> 

            <div className="skillbar" data-percent="60%">
                <div className="skillbar-title" style={{background: '#2c3e50'}}>
                    <span>
                    <i className="devicon-jquery-plain-wordmark"></i> JQuery
                    </span>
                </div>
                <div className="skillbar-bar" style={{background: '#2c3e50'}}></div>
                <div className="skill-bar-percent">60%</div>
            </div> 

            <div className="skillbar" data-percent="30%">
                <div className="skillbar-title" style={{background: '#008199'}}>
                    <span>
                    <i className='devicon-react-original-wordmark'></i> React.js
                    </span>
                </div>
                <div className="skillbar-bar" style={{background: '#00d8ff'}}></div>
                <div className="skill-bar-percent">30%</div>
            </div> 

            <div className="skillbar" data-percent="30%">
                <div className="skillbar-title" style={{background: '#782817'}}>
                    <span>
                    <i className="devicon-git-plain-wordmark"></i> Git
                    </span>
                </div>
                <div className="skillbar-bar" style={{background: '#f1502f'}}></div>
                <div className="skill-bar-percent">30%</div>
            </div> 
 


            </div>
        )
    }
}