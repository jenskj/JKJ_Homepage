import React from 'react';
import {Timeline, TimelineEvent} from './timeline/components/index'
import './timeline/components/styles.js'

export class EducationTimeline extends React.Component {
    render() {
        return (
    <Timeline>
            <TimelineEvent
                
                createdAt="2012-2013"
                icon={<i className="material-icons md-18">school</i>}
            >
                Studieophold ved University of Washington
            </TimelineEvent>
            
            <TimelineEvent
                
                createdAt="2010-2015"
                icon={<i className="material-icons md-18">school</i>}
            >
                Cand.mag. i engelsk og filosofi ved Aarhus Universitet
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2008"
                icon={<i className="material-icons md-18">music_note</i>}
            >
                London Music School
            </TimelineEvent>
            <TimelineEvent
                
                createdAt="2004-2007"
                icon={<i className="material-icons md-18">school</i>}
            >
                Skanderborg Gymnasium
            </TimelineEvent>
    </Timeline>
        )
    }
}