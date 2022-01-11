import styled from "styled-components";
import colors from '../../styles/Colors';

const MainSection = styled.section`
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    gap: 90px;
    margin: 0px auto;
    margin-top: 200px;
    width: 92%;
    height: 100%;
    
    @media (max-width: 1150px) {
        font-size: 28px;
        letter-spacing: 1px;
        margin-top: 250px;
    }

    @media (max-width: 1000px) {
        margin-top: 70px;
        flex-direction: column-reverse;
    }
`;

const Title = styled.h2`
    color: ${colors.darkBlue};
    font-size: 44px;
    letter-spacing: 2.5px;
    margin-top: 40px;

    @media (max-width: 1150px) {
        font-size: 28px;
        letter-spacing: 1px;
    }

    @media (max-width: 1000px) {
        margin-top: 0px;
        font-size: 38px;
    }
`;

const SubTitle = styled.h4`
    color: ${colors.darkBlue};
    opacity: .8;
    font-size: 22px;
    font-weight: 500;
    margin: 20px 0px;
    @media (max-width: 1150px) {
        font-size: 16px;
    }

    @media (max-width: 1150px) {
        font-size: 18px;
    }
`;

const Illustration = styled.img`
    width: 500px;
    @media (max-width: 1150px) {
        width: 400px;
    }
`;


export { Title, MainSection, SubTitle, Illustration };