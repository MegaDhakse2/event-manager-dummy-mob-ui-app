import { createSlice } from "@reduxjs/toolkit"
import icon from '../assets/icons/icons8-man-48.png';

const assigneesInitialState = {
    currentAssignee : {},
    assignees : [
        {
            assigneeName : 'Mega K S',
            assigneeImageSRC : icon
        },
        {
            assigneeName : 'James W',
            assigneeImageSRC : icon
        },
        {
            assigneeName : 'Kohli V',
            assigneeImageSRC : icon
        },
        {
            assigneeName : 'Hakai H',
            assigneeImageSRC : icon
        }

    ]
}

const assigneesSlice = createSlice({
    name:'assignees',
    initialState: assigneesInitialState,
    reducers: {
        setCurrentAssignee(state, action){
            const getAssigneeName = action.payload.assigneeName;
            state.assignees.forEach(assignee => {
                if (assignee.assigneeName === getAssigneeName) {
                    state.currentAssignee = assignee;
                }
            });
        }
    }
})

const assigneesReducers = assigneesSlice.reducer;
export const assigneesActions = assigneesSlice.actions;

export default assigneesReducers;