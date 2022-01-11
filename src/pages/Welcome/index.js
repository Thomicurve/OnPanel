import React from 'react';
import welcomeIllustration from '../../assets/images/welcomeIllustration.png';
import Navbar from '../../components/Navbar';
import { MainSection, SubTitle, Title, Illustration } from './style';

import Buttons from '../../components/Buttons';

const Welcome = () => {
    return (
        <>
            <Navbar navActive={1}/>
            <MainSection>
                <article>
                    <Title>Administrate your employee tasks professionaly.</Title>
                    <SubTitle>This is a free aplication for people that need have better administration about their employees. Let’s start with one click.</SubTitle>
                    <div style={{marginTop: 30}}>
                    <Buttons buttonText={'Register now'} linkUrl={'/register'} register={true}/>
                    <Buttons buttonText={'Login'} linkUrl={'/login'} register={false}/>
                    </div>
                </article>
                <article>
                    <Illustration src={welcomeIllustration} alt="welcome illustration" />
                </article>
            </MainSection>
        </>
    )
}

export default Welcome;
