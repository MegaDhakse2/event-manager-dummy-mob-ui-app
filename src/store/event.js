import { createSlice } from "@reduxjs/toolkit"

const eventsInitialState = {
    event : {
                eventName :'Flower Arrangements',
                eventDate :'2024-05-11',
                eventNote : '',
                assignee : 'Mega K S',
                comments : [
                  {   
                     commentId : 0,
                     commentTxt: '',
                     commenter: ''
                  }
                ]
            }
}

const eventSlice = createSlice({
    name:'event',
    initialState: eventsInitialState,
    reducers: {
         setEventName(state, action){
            state.event.eventName = action.payload.eventName;
         },
         setEventDate(state, action){
            state.event.eventDate = action.payload.eventDate;
         },
         setEventNote(state, action){
            state.event.eventNote = action.payload.eventNote
         },
         setEventAssignee(state, action){
            state.event.assignee = action.payload.assignee
         },
         setComments(state, action){
            state.event.comments = [ 
                                    ...state.event.comments,
                                    {   
                                       commentId : action.payload.commentTxt[0] + state.event.comments.length + action.payload.commentTxt[0,2],
                                       // commentId : state.event.comments[state.event.comments.length].commentId + 1,
                                       commentTxt: action.payload.commentTxt,
                                       commenter: action.payload.commenter
                                    }
                                   ]
         },
         deleteComment(state, action){
            // console.log(action.payload.commentId);
            state.event.comments = state.event.comments.filter((comment) => !(comment.commentId === action.payload.commentId));
         }
    }
})

const eventReducers = eventSlice.reducer;
export const eventActions = eventSlice.actions;

export default eventReducers;