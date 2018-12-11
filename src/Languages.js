import React from 'react';


export class Languages extends React.Component {
    render() {
        const styles = {
            width: 900,
            bottom: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            top: 160
        }
        return (
            <div style={styles}>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className='devicon-react-original-wordmark'></i>
            <i className="devicon-jquery-plain-wordmark"></i>
            <i className="devicon-git-plain-wordmark"></i>
            </div>
        )
    }
}