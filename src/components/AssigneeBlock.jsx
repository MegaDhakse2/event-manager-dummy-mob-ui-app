import userIcon from '../assets/icons/icons8-user-48.png';
import noteIcon from '../assets/icons/icons8-note-16.png';
import dropDownIcon from '../assets/icons/icons8-dropdown-50.png';

import Icon from './UI/Icon';
import './AssigneeBlock.css';
import { useDispatch, useSelector } from 'react-redux';
import { assigneesActions } from '../store/assignees';
import { eventActions } from '../store/event';

export default function AssigneeBlock(){
    const dispatch = useDispatch();
    const assignees = useSelector(state => state.assignees.assignees);
    const currentEvent = useSelector(state => state.event.event);

    return(
        <div className="assignee-block">
            <div>
                <span>
                    <Icon 
                        src={userIcon}
                        alt={'User Icon'}
                    />
                    Assign to :
                </span>
                <div className='users-dropdown'>
                    <select 
                        name="assignedUser" 
                        onChange={(e)=>dispatch(eventActions.setEventAssignee({assignee: e.target.value}))}
                        // onChange={(e)=>console.log(e.target.value)}
                    >
                        {
                            assignees.map((assignee)=>(
                                <option key={assignee.assigneeName} value={assignee.assigneeName}> 
                                    {assignee.assigneeName}
                                </option>
                            ))
                        }
                    </select>
                    <Icon 
                        src={dropDownIcon}
                        alt={'User Icon'}
                    />
                </div>
            </div>
            <div>
                <span>
                    <Icon 
                        src={noteIcon}
                        alt={'Note Icon'}
                    />
                    Note:
                </span>
                <div className='note-holder'>
                    {currentEvent.eventName} scheduled on {currentEvent.eventDate} .
                </div>
            </div>
        </div>
    )
}