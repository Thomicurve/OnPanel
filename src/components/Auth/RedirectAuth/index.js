import React from 'react';
import { Link } from 'react-router-dom';
import { LinkText } from './style';

const RedirectAuth = ({message, linkURL}) => {
    return (
        <Link to={linkURL}><LinkText>{message}</LinkText></Link>
    ) 
}

export default RedirectAuth;