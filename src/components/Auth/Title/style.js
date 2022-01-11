import styled from "styled-components";
import colors from "../../../styles/Colors";

const TitleText = styled.h4`
    color: ${colors.darkBlue};
    text-align: center;
    font-size: 44px;
    font-weight: bold;
`;

const TitleContainer = styled.header`
    width: 100%;
    margin-top: 200px;
`;

export {TitleText, TitleContainer};