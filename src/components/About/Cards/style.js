import styled from "styled-components";
import colors from "../../../styles/Colors";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 201px;
    height: 264px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0,0,0,.25);
    padding: 0px 5px;
    border-radius: 5px;
    @media screen and (max-width: 1000px) {
        width: 150px;
        height: 230px;
    }
`;

const CardTitle = styled.p`
    text-align: center;
    color: ${colors.lightBlue};
    font-size: 20px;
    font-weight: bold;
    @media screen and (max-width: 1000px) {
        font-size: 17px;
    }
`;

export { CardContainer, CardTitle };