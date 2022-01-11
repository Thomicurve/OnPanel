import React from 'react';
import Navbar from '../components/Navbar';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LinkStyleProvideer } from '../context/LinkStyleContext';

const history = createBrowserHistory();

const NavbarMock = () => {
    return (
        <LinkStyleProvideer>
            <Router history={history}>
                <Navbar/>
            </Router>
        </LinkStyleProvideer>
    )
};

export default NavbarMock;