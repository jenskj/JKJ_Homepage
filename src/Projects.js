import React from 'react';
import './projects.css';

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.toggleGrid = this.toggleGrid.bind(this);
        this.state = {
            active: 'false'
            }
      }
 
      toggleGrid() {
        
            let currentState = this.state.actives.active;
            this.setState({active: !currentState}
            )}
        
    render() {
        return (
        <div id='projectsWrapper'>
            
            <div className="grid">
                <div className='box a'>
                <h2 className='projectTitle'>Literary Timeline From Raw Data</h2>
                <div className='viewDiv'>
                    <a 
                        href='https://codepen.io/jenskj/full/wQyLLp'
                        target='_blank'                                    
                        className="viewProject"
                        >view project
                    </a>
                    <svg id='codepen' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 26" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                        </svg>
                </div>
                
                </div>
                <div className='box b'>
                    <h2 className='projectTitle'>Project B</h2>
                    <div className='viewDiv'>
                        <a 
                            href='https://codepen.io/jenskj/full/wQyLLp'
                            target='_blank'                                    
                            className="viewProject">view project
                            
                        </a>
                        <svg id='codepen' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 26" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                            </svg>
                    </div>
                
                </div>
                
                <div className="box c">
                
                <h2 className='projectTitle'>Project C</h2>
                    <div className='viewDiv'>
                        <a 
                            href='https://codepen.io/jenskj/full/wQyLLp'
                            target='_blank'                                    
                            className="viewProject">view project
                            
                        </a>
                        <svg id='codepen' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 26" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                            </svg>
                    </div>
                
                </div>
                
                <div className="box d">
                
                <h2 className='projectTitle'>Big Five Flex</h2>
                    <div className='viewDiv'>
                        <a 
                            href='https://codepen.io/jenskj/full/wQyLLp'
                            target='_blank'                                    
                            className="viewProject">view project
                            
                        </a>
                        <svg id='codepen' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 26" fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                            </svg>
                    </div>
                </div>
               
                
                <div className="box e"></div>
                
                <div className="box f"></div>

                <div className="box g"></div>

                <div className="box h"></div>

                
               
            </div>
        </div>
        )
    }
}