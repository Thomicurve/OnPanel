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
        return {message: error, error: true}
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
        return {message: error, error: true}
    }
};

const ResetPasswordService = async ({email}) => {
    try {
        const result = await axios.post(`${url}/send-email`, {
            email
        });
        return result.data;
    } catch(error) {
        return {message: error, error: true}
    }
};

const ChangePassword = async ({code, password, repeatedPassword}) => {
    try {
        const result = await axios.post(`${url}/reset-password`, {
            code,
            password,
            repeatedPassword
        });
        return result.data;
    } catch(error) {
        return {message: error, error: true};
    }
}


export { LoginService, RegisterService, ResetPasswordService, ChangePassword };
