import React from 'react';
import styled from 'styled-components';
import Arrow from '../../../assets/icons/Arrows.svg';

const ArrowContainer = styled.div`
    @media screen and (max-width: 700px) {
        transform: rotateZ(90deg);
        margin: 5px 0px;
    }
`

const Arrows = () => {
    return (
        <ArrowContainer>
            <img src={Arrow} alt='arrow icon'/>
        </ArrowContainer>
    )
};

export default Arrows;