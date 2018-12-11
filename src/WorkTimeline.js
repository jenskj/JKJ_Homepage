import React from 'react';
import {Timeline, TimelineEvent} from './timeline1/components/index'
import './timeline1/components/styles.js'

export class WorkTimeline extends React.Component {
    render() {
        return (
    <Timeline>
            <TimelineEvent 
                           createdAt="2017-2018"
                           icon={<i className="material-icons md-18">work</i>}
            >
               Årsvikar på Ikast-Brande Gymnasium – Engelsk og Theory of Knowledge
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2016-2017"
                icon={<i className="material-icons md-18">work</i>}
            >
                Årsvikar på Vestjysk Gymnasium Tarm – Engelsk
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2015-2016"
                icon={<i className="material-icons md-18">work</i>}
            >
                Årsvikar på Ikast-Brande Gymnasium – Engelsk
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2014-2016"
                icon={<i className="material-icons md-18">work</i>}
            >
                Frivillig oversætter og redaktionsmedlem hos forlaget Philosophia
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2011"
                icon={<i className="material-icons md-18">work</i>}
            >
                Instruktor i akademisk forskning og formidling ved Aarhus Universitet
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2011"
                icon={<i className="material-icons md-18">work</i>}
            >
                Mentor for udvekslingsstuderende ved Aarhus Universitet
            </TimelineEvent>
           <TimelineEvent
                
                createdAt="2007-2008"
                icon={<i className="material-icons md-18">work</i>}
            >
                Postomdeler ved Post Danmark Skanderborg
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2006-2007 og 2009-2011"
                icon={<i className="material-icons md-18">work</i>}
            >
                Guitarunderviser ved Skanderborg Ungdomsskole
            </TimelineEvent>
    </Timeline>
        )
    }
}