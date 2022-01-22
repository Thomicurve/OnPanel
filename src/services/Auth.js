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
        console.log({email, password, token})
        return result.data;
    } catch(error) {
        return new Error(`Error logining: ${error}`)
    }
}

export { LoginService };
