import styled from "styled-components";
import colors from "../../styles/Colors";

const ButtonRegister = styled.button`
    background-color: ${colors.lightBlue};
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 5px 0px;
    width: 150px;
    margin-right: 30px;
    font-size: 16px;
    color: ${colors.white};
    font-weight: 600;
    cursor: pointer;
    transition: .5s ease;
    transition-property: color background-color;
    :hover {
        transform: translateY(-5px);
        background-color: ${colors.lightBlueHover}
    }
`;

const ButtonLogin = styled.button`
    background-color: ${colors.orange};
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 5px 0px;
    width: 150px;
    margin-right: 30px;
    font-size: 16px;
    color: ${colors.white};
    font-weight: 600;
    cursor: pointer;
    transition: .5s ease;
    transition-property: color background-color;
    :hover {
        transform: translateY(-5px);
        background-color: ${colors.orangeHover}
    }
`;

export { ButtonLogin, ButtonRegister };