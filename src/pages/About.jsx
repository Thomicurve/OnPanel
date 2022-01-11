import React from 'react';
import Navbar from '../components/Navbar';
const Welcome = () => {
    return (
        <>
            <Navbar navActive={2}/>
            <div>
                <h1>About page</h1>
            </div>
        </>
    )
}

export default Welcome;
