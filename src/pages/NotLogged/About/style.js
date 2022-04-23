import styled from "styled-components";
import colors from "@styles/Colors";

const AboutContainer = styled.section`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleContainer = styled.article`
    margin-top: 220px;
    @media screen and (max-width: 930px) {
        margin-top: 120px;
    }
`;

const Title = styled.h3`
    font-size: 40px;
    font-weight: bold;
    width: 1000px;
    color: ${colors.darkBlue};
    @media screen and (max-width: 930px) {
        font-size: 34px;
        width: 700px;
    }

    @media screen and (max-width: 700px) {
        font-size: 28px;
        width: 100%;
    }
`;

const SubTitle = styled.h6`
    font-size: 18px;
    font-weight: 500;
    color: ${colors.darkBlue};
    @media screen and (max-width: 700px) {
        font-size: 16px;
    }
`;

const CardsContainer = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 10px;
    margin-top: 50px;
    margin-bottom: 30px;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export { Title, TitleContainer, CardsContainer, AboutContainer, SubTitle };