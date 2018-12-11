import React from 'react';
import './contactMe.css'

export class ContactMe extends React.Component {
    render() {
        return (
                <div class="cont">
                    <ul class="contact">
                        <li style={{textAlign: 'left'}}>
                        <p><i class="fa fa-map-marker fa-3x"></i></p>
                        <p><strong>Location</strong><br />Aarhus, Denmark</p>
                        </li>
                        <li style={{textAlign: 'left'}}>
                        <p><i class="fa fa-phone fa-3x"></i></p>
                        <p><strong>Phone</strong><br />+45 40 95 71 91</p>
                        </li>
                        <a href='mailto:jens_kj@hotmail.com'>
                            <li style={{textAlign: 'left', paddingRight: 10}}>
                            <p><i class="fa fa-envelope fa-3x"></i></p>
                            <p><strong>E-mail</strong><br /><p style={{visibility: 'hidden'}}>fake text</p></p>
                            </li>
                        </a>
                        <a href='https://www.linkedin.com/in/jens-k-jensen/'>
                            <li style={{textAlign: 'left', color: '#0077B5'}}>
                                <p><i class="fa fa-linkedin fa-3x"></i></p>
                                <p><strong>LinkedIn</strong><br /><p style={{visibility: 'hidden'}}>fake text</p></p>
                            </li>
                        </a>
                    </ul>
                    </div>
                )
    }
}