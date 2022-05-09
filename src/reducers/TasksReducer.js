import { DeleteTask, EditTask } from '../services/Tasks';
import { AllTasks } from '../services/Admin';


export const TasksReducer = (state = {tasks: [], hasEmployees: false}, action) => {
    switch(action.type) {
        case '@tasks/allTasks': 
            return action.payload;

        case '@tasks/editTask': 
            const {taskID, taskContent} = action.payload;
            return {
                tasks: state.tasks.map(task => {
                    if(task._id === taskID) {
                        return {
                            ...task,
                            ...taskContent
                        }
                    }
    
                    return task;
                }),
                hasEmployees: state.hasEmployees
            }

        default:
            return state;
    }
}

export const editTask = ({token, taskID, taskContent}) => {
    return async (dispatch) => {
        await EditTask({token, taskID, ...taskContent});
        dispatch({
            type: '@tasks/editTask',
            payload: {taskID, taskContent}
        })
    }
}


export const getAllTasks = token => {
    return async (dispatch) => {
        const tasksData = await AllTasks(token);
        
        dispatch({
            type: '@tasks/allTasks',
            payload: tasksData
        })
    }
}