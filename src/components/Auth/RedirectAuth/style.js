import styled from "styled-components";
import colors from "@styles/Colors";

const LinkText = styled.p`
    color: ${colors.lightBlue};
    text-decoration: none;
    text-align: right;
    font-weight: 500;
    font-size: 14px;
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export { LinkText };