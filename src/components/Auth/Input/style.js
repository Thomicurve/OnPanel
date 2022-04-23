import styled from "styled-components";
import colors from "@styles/Colors";

const InputContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

const Label = styled.label`
    display: block;
    color: ${colors.darkBlue};
    font-size: 18px;
    font-weight: bold;
    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const InputField = styled.input`
    padding: 15px 10px;
    border: none;
    border-radius: 4px;
    box-shadow: 3px 2px 5px rgba(0,0,0,0.25);
    width: 100%;
    outline: none;
    box-sizing: border-box;
    ::placeholder {
        color: ${colors.placeholderText};
        font-size: 14px;
        font-weight: 600;
    }
`;

const ErrorStyle = styled.p`
    color: ${colors.error};
    font-weight: 400;
    font-size: 14px;
    margin-top: 10px;
`;

export { ErrorStyle, InputContainer, Label, InputField };