import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { ItemsMobile,IconsNavMobile, NavItem, LinksList, Nav, IconList, Icons, 
    NavMobile, ListMobile, NavDesktop, IconsDesktop, NavbarButton, NavmenuMobile } from './style';
import Bars from '@assets/icons/Bars.svg';
import Exit from '@assets/icons/Exit.svg';

import colors from '@styles/Colors';

const LinkStyles = {
    height: '38px',
    width: '90px',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
};

const LinkStylesMobile = {
    height: '38px',
    width: '100%',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
}

const Navbar = ({navActive = 0}) => {
    const navMenu = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        if(menuOpen) {
            navMenu.current.style.right = '0px';
        } else {
            navMenu.current.style.right = '-650px';
        }
    }, [menuOpen])

    return (
        <Nav>
            <NavMobile>
                <NavbarButton onClick={() => { setMenuOpen(!menuOpen) }} src={!menuOpen ? Bars : Exit} alt='Nav button icon' />
                <NavmenuMobile ref={navMenu}>
                    <ListMobile>
                        <ItemsMobile>
                            <Link style={{
                                color: navActive == 1 ? colors.white : colors.lightBlue,
                                backgroundColor: navActive == 1 ? colors.lightBlue : colors.transparent, ...LinkStylesMobile
                            }} to="/">Home</Link>
                        </ItemsMobile>
                        <ItemsMobile>
                        <Link style={{
                            color: navActive == 2 ? colors.white : colors.lightBlue,
                            backgroundColor: navActive == 2 ? colors.lightBlue : colors.transparent, ...LinkStylesMobile
                        }} to="/about">About</Link>
                        </ItemsMobile>
                        <ItemsMobile>
                        <Link style={{
                            color: navActive == 3 ? colors.white : colors.lightBlue, ...LinkStylesMobile,
                            backgroundColor: navActive == 3 ? colors.lightBlue : colors.transparent
                        }} to="/creator">Creator</Link>
                        </ItemsMobile>
                        <ItemsMobile>
                        <Link style={{
                            color: navActive == 4 ? colors.white : colors.lightBlue, ...LinkStylesMobile,
                            backgroundColor: navActive == 4 ? colors.lightBlue : colors.transparent
                        }} to="/contact">Contact</Link>
                        </ItemsMobile>
                    </ListMobile>
                    <div>
                        <IconsNavMobile>
                            <li><Icons href="#github"><i className="fab fa-github"></i></Icons></li>
                            <li><Icons href="#linkedin"><i className="fab fa-linkedin"></i></Icons></li>
                        </IconsNavMobile>
                    </div>
                </NavmenuMobile>
            </NavMobile>
            <NavDesktop>
                <LinksList>
                    <NavItem>
                        <Link style={{
                            color: navActive == 1 ? colors.white : colors.lightBlue,
                            backgroundColor: navActive == 1 ? colors.lightBlue : colors.transparent, ...LinkStyles
                        }} to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link style={{
                            color: navActive == 2 ? colors.white : colors.lightBlue,
                            backgroundColor: navActive == 2 ? colors.lightBlue : colors.transparent, ...LinkStyles
                        }} to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link style={{
                            color: navActive == 3 ? colors.white : colors.lightBlue, ...LinkStyles,
                            backgroundColor: navActive == 3 ? colors.lightBlue : colors.transparent
                        }} to="/creator">Creator</Link>
                    </NavItem>
                    <NavItem>
                        <Link style={{
                            color: navActive == 4 ? colors.white : colors.lightBlue, ...LinkStyles,
                            backgroundColor: navActive == 4 ? colors.lightBlue : colors.transparent
                        }} to="/contact">Contact</Link>
                    </NavItem>
                </LinksList>
            </NavDesktop>
            <IconsDesktop>
                <IconList>
                    <li><Icons href="#github"><i className="fab fa-github"></i></Icons></li>
                    <li><Icons href="#linkedin"><i className="fab fa-linkedin"></i></Icons></li>
                </IconList>
            </IconsDesktop>
        </Nav>
    )
};

export default Navbar;