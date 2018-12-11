import React from 'react';

export class BannerHeader extends React.Component {
    render() {
        const titleStyles = {
            position: 'relative',
            left: '11%',
            top: 25,
            width: '80%',
            zIndex: '10',
            textShadow: '-1px 0 whitesmoke, 0 1px whitesmoke, 1px 0 whitesmoke, 0 -1px whitesmoke',

        }
       
        return (
        <div>
            <div style={titleStyles}>
                <p>Jens Kjær Jensen</p>
            </div>
            {/* <div style={subtitleStyles} id='subtitle'>
                <p> - Web Developer / Teacher</p>
            </div> */}
        </div>
        )
    }
}