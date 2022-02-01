import React from 'react';
import { Link } from 'react-router-dom';
import { TitleContainer, AboutContainer, Title, SubTitle, CardsContainer } from './style';

import Navbar from '../../components/Navbar';
import Cards from '../../components/About/Cards';
import Arrows from '../../components/About/Arrows';

// Icons
import Add from '../../assets/icons/Add.svg';
import Key from '../../assets/icons/Key.svg';
import Tasks from '../../assets/icons/Tasks.svg';
import Graphics from '../../assets/icons/Graphics.svg';
import colors from '../../styles/Colors';


const About = () => {
    return (
        <>
            <Navbar navActive={2}/>
            <AboutContainer>
                <TitleContainer>
                    <Title>Create employees, give task to them, and administrate their progress.</Title>
                    <SubTitle>First create an admin account <Link to="/register" style={{color: colors.orange, fontWeight: 'bold'}}>here</Link>. Then follow the next steps:</SubTitle>
                </TitleContainer>
                <CardsContainer>
                    <Cards cardText={'Create a new employee'} cardImage={Add}  />
                    <Arrows/>
                    <Cards cardText={'Give the key to your employee'} cardImage={Key}  />
                    <Arrows/>
                    <Cards cardText={'Assign tasks'} cardMargin='10px' cardImage={Tasks}  />
                    <Arrows/>
                    <Cards cardText={'Start to administrate'} cardImage={Graphics}  />
                </CardsContainer>
            </AboutContainer>
        </>
    )
}

export default About;