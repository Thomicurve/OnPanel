import React, {useContext} from 'react';
import { screen, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
// HOOKS
import LinkContext from '../../context/LinkStyleContext';
import { LinkStyleProvideer } from '../../context/LinkStyleContext';


// MOCKS
import  NavbarMock from '../../__mocks__/NavbarMock';

describe('<Navbar/>', () => {
    test('Must show a nav item', () => {
        render(<NavbarMock/>);
        expect(screen.queryByText(/Home/)).toBeInTheDocument();
    });
});