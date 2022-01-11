import axios from 'axios';
const url = "http://localhost:3000" || process.env.API_URL;

// const Login = async ({token, email, password}) => {
//     try {
//         const result = await axios.post(url, {
//             "headers": {
//                 "x-access-token": token
//             },
//             "body": {
//                 "email": email,
//                 "password": password
//             }
//         })
    
//     } catch(error) {
//         return new Error(`Error logining: ${error}`)
//     }

// export {Login};

