import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from '@assets/icons/LeftArrow.svg';
import { BackContentContainer, BackContainer, BackText } from "./style";

const GoBackButton = ({backText}) => {
    return (
        <BackContainer>
            <Link style={{textDecoration: 'none'}} to="/">
                <BackContentContainer>
                    <img width={25} src={LeftArrow} alt="left arrow icon" />
                    <BackText>{backText}</BackText>
                </BackContentContainer>
            </Link>
        </BackContainer>
    )
}

export default GoBackButton;