import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from '../../assets/icons/LeftArrow.svg';
import { BackContentContainer, BackContainer, BackText } from "./style";

const GoBackButton = () => {
    return (
        <BackContainer>
            <Link to="/">
                <BackContentContainer>
                    <img width={25} src={LeftArrow} alt="left arrow icon" />
                    <BackText>Back to home</BackText>
                </BackContentContainer>
            </Link>
        </BackContainer>
    )
}

export default GoBackButton;