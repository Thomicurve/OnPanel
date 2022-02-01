import axios from 'axios';
const url =  "http://localhost:3030" || process.env.API_URL;

const LoginService = async ({token, email, password}) => {
    try {
        const result = await axios.post(`${url}/login`, {
            email,
            password
        }, {
            headers: {
                'x-access-token': token
            }
        })
        return result.data;
    } catch(error) {
        return new Error(`Unexpected error: ${error}`);
    }
};

const RegisterService = async ({token, email, name, password, repeatedPassword}) => {
    try {
        const result = await axios.post(`${url}/register`, {
            email,
            password,
            name,
            repeatedPassword
        },
        {
            headers: {
                'x-access-token': token
            }
        });
        return result.data;
    } catch(error) {
        return new Error(`Unexpected error: ${error}`)
    }
}
export { LoginService, RegisterService };
