import MyInputComponent from "./UI/MyInputComponent";
import './EventHeaders.css';
import { useDispatch, useSelector } from "react-redux";
import {eventActions} from '../store/event.js';

export default function EventHeaders(){
    const dispatch = useDispatch();
    const eventName = useSelector(state => state.event.event.eventName);
    const eventDate = useSelector(state => state.event.event.eventDate);

    return(
        <div className="event-headers">
            <MyInputComponent 
                type={'text'}
                name={'eventName'}
                isHeadingTxt={true}
                defaultValue={eventName}
                onBlur={(e)=>dispatch(eventActions.setEventName({eventName: e.target.value}))}
            />
            <MyInputComponent 
                type={'date'}
                name={'eventDate'}
                isDateHolder
                defaultValue={eventDate}
                onChange={(e)=>dispatch(eventActions.setEventDate({eventDate: e.target.value}))}
            />

        </div>
    )
}