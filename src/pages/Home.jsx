import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import {useCookies} from 'react-cookie';

function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['userID']);
    const {setToken, token} = useContext(UserContext); 

    const handleLogout = () => {
        console.log('Exiting...👨‍💻');

        setTimeout(() => {
            removeCookie('userID');
            setToken('');
        }, 3000)

    }

    return (
        <div>
            <h1>Welcome {token ? token : ''}</h1>
            <p>this is the home page!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
