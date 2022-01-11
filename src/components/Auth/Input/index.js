import React from "react";
import { InputContainer, InputField, Label, ErrorStyle } from "./style";

const Input = ({labelText, inputType, inputText, HandleChange, InputValue, inputName, error}) => {
    return (
        <InputContainer>
            <Label>{labelText}</Label>
            <InputField onChange={HandleChange} type={inputType} placeholder={inputText} value={InputValue} name={inputName}/>
            {error && <ErrorStyle>{error}</ErrorStyle>}
        </InputContainer>
    );
}

export default Input;