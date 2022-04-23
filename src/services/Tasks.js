import axios from 'axios';
const url =  "http://localhost:3030" || process.env.API_URL;

const DeleteTask = async ({token, taskID}) => {
    try {
        const deleteTaskResult = await axios.delete(`${url}/tasks/${taskID}`
        ,{
            headers: {
                'x-access-token': token
            }
        });
        return {result: deleteTaskResult.data};
    } catch(error) {
        return {message: error, error: true}
    }
};

const EditTask = async ({token, taskID, task_description, task_title, task_expiration}) => {
    
    try {
        const editTaskResult = await axios.put(`${url}/tasks/${taskID}`,{
            task_title,
            task_description,
            task_expiration: ''
        }
        ,{
            headers: {
                'x-access-token': token
            }
        });
        return {result: editTaskResult.data};
    } catch(error) {
        return {message: error, error: true}
    }
};

export { DeleteTask, EditTask };