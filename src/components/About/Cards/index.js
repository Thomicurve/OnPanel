import React from 'react';
import { CardContainer, CardTitle } from './style';

const Cards = ({cardText, cardImage, cardMargin = '0px'}) => {
    return (
        <CardContainer>
            <CardTitle style={{margin: `${cardMargin} 0px`}}>{cardText}</CardTitle>
            <img src={cardImage} width={90} height={90} />
        </CardContainer>
    )
};

export default Cards;