import React from 'react';
import { TitleContainer, TitleText } from './style';

const Title = ({message}) => {
    return (
        <TitleContainer>
            <TitleText>{message}</TitleText>
        </TitleContainer>
    )
}

export default Title;