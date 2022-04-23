import axios from 'axios';
const url =  "http://localhost:3030" || process.env.API_URL;

const AdminData = async ({token}) => {
    try {
        const resultAdminData = await axios.get(`${url}/admin-data`
        ,{
            headers: {
                'x-access-token': token
            }
        });
        return {adminData: resultAdminData.data, employees: resultEmployees.data.employees};
    } catch(error) {
        return {message: error, error: true}
    }
};

export { AdminData };