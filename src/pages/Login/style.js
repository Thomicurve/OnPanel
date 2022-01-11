import styled from 'styled-components';

const FormContainer = styled.form`
    width: 700px;
    margin: 30px auto;
    @media screen and (max-width: 900px) {
        width: 95%;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;


export { FormContainer, ButtonContainer };