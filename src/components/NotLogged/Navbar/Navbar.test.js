import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navbar from './index';

test('renders content', () => {
    const navbar = {
        navActive: 3
    }

    const component = render(<Navbar navActive={navbar.navActive}/>);
    console.log(component);
})