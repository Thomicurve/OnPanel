import styled from 'styled-components';
import colors from '@styles/Colors.js';

const NavDesktop = styled.div`
    display: block;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Nav = styled.nav`
    margin: 15px auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 800px) {
        margin: 0;
        width: 100%;
    }
`;

const IconsDesktop = styled.div`
    display: block;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const NavMobile = styled.div`
    display: none;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px 10px;
    background-color: ${colors.lightBlue};
    @media screen and (max-width: 800px) {
        display: flex;
    }
`;

const ListMobile = styled.ul`
    width: 85%;
`;

const ItemsMobile = styled.li`
    list-style: none;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 25px;
    width: 100%;
    transition: background-color .3s ease;
    border-radius: 10px;
    :hover {
        background-color: #6b7ff225;
    }
`;

const NavmenuMobile = styled.div`
    position: absolute;
    height: 69vh;
    width: 80%;
    transition: right 0.5s ease;
    margin-top: 45px;
    background-color: ${colors.white};
    box-shadow: -6px 0px 10px rgba(0,0,0,0.15);
    z-index: 10;
    right: -640px;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 250px;
    align-items: center;
`;

const IconsNavMobile = styled.ul`
    display: flex;
    width: 70px;
    justify-content: space-between;
    list-style: none;
`;  

const NavbarButton = styled.img`
    cursor: pointer;
`;

const NavItem = styled.li`
    font-size: 18;
    list-style: none;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    border-radius: 10px;
    transition: background-color .3s ease;
    :hover {
        background-color: #6b7ff225;
    }
`;

const LinksList = styled.ul`
    display: flex;
    width: 480px;
`;

// ICONS
const IconList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
`;

const Icons = styled.a`
    text-decoration: none;
    color: ${colors.orange};
    font-size: 28px;
    transition: color .4s ease;
    :hover {
        color: ${colors.orangeHover};
    }
`;

export {ItemsMobile, IconsNavMobile, NavbarButton, NavItem, LinksList, Nav, 
    IconList,ListMobile, Icons, NavMobile, NavDesktop, IconsDesktop, NavmenuMobile};