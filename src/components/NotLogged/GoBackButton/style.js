import styled from "styled-components";
import colors from "@styles/Colors";

const BackContainer = styled.article`
    width: 210px;
    position: absolute;
    bottom: 100px;
    left: 0px;
    @media screen and (max-width: 600px) {
        left: -30px;
    }
`;

const BackContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BackText = styled.p`
    color: ${colors.darkBlue};
    font-weight: 600;
    font-size: 14px;
    margin-left: 10px;
    @media screen and (max-width: 600px) {
        margin-left: 5px;
    }
`;

export { BackContentContainer, BackContainer, BackText };