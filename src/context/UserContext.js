import React, {useState} from 'react';

const TokenContext = React.createContext({token: ''});

const TokenProvider = ({children, userToken}) => {
    const [token, setToken] = useState({token: userToken});

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export {TokenProvider};


export default TokenContext;