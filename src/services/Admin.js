import axios from 'axios';
const url =  "http://localhost:3030" || process.env.API_URL;

const AdminData = async (token) => {
    try {
        const resultAdminData = await axios.get(`${url}/admin-data`
        ,{
            headers: {
                'x-access-token': token
            }
        });
        const resultEmployees = await axios.get(`${url}/employees`, 
        {
            headers: {
                'x-access-token': token
            }
        });
        return {adminData: resultAdminData.data, employees: resultEmployees.data.employees};
    } catch(error) {
        return {message: error, error: true}
    }
};

const AllTasks = async (token) => {
    try {
        const tasksResult = await axios.get(`${url}/tasks-list`
        ,{
            headers: {
                'x-access-token': token
            }
        });
        return {tasks: tasksResult.data.tasksList};
    } catch(error) {
        return {message: error, error: true}
    }
};

export { AllTasks, AdminData };