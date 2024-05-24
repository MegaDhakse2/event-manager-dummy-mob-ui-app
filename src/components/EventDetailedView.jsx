import './EventDetailedView.css'
import EventHeaders from './EventHeaders'
import Icon from './UI/Icon'
import tickIcon from '../assets/icons/icons8-tick-16.png'
import binIcon from '../assets/icons/icons8-waste-32.png'
import closeIcon from '../assets/icons/icons8-close-48.png'
import AssigneeBlock from './AssigneeBlock'
import CommentsBlock from './CommentsBlock'

export default function EventDetailedView(){
    return(
        <div className="event-page-layout">
            <div className="ep-status-bar">
                <Icon 
                    src={tickIcon}
                    alt={'Event Status Icon'}
                />
                <div>
                <Icon 
                    src={binIcon}
                    alt={'Event Status Icon'}
                />
                &nbsp;
                &nbsp;
                <Icon 
                    src={closeIcon}
                    alt={'Event Status Icon'}
                />
                </div>
            </div>
            <div className="ep-event-headers">
                <EventHeaders/>
            </div>
            <div className="ep-assignee-block">
                <AssigneeBlock/>
            </div>
            <div className="ep-comments-section">
                <CommentsBlock/>
            </div>
        </div>
    )
}