import React from 'react';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { FormContainer, ButtonContainer } from "../../styles/AuthForms";


import Navbar from "../../components/Navbar";
import GoBackButton from "../../components/GoBackButton";
import Title from '../../components/Auth/Title';
import Input from "../../components/Auth/Input";
import RedirectAuth from "../../components/Auth/RedirectAuth";
import Buttons from '../../components/Buttons';

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required field'),
    name: Yup.string().required('Required field'),
    password: Yup.string().required('Required field'),
    repeatedPassword: Yup.string().required('Required field').oneOf([Yup.ref('password')], 'Passwords are not the same'),
});


const Register = () => {

    const handleSubmit = (data) => {
        console.log(data);
    }

    const registerFormik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            repeatedPassword: ''
        },
        validationSchema: RegisterSchema,

        onSubmit: (formData) => {
            handleSubmit(formData);
        }

    });

    return (
        <>
            <Navbar />
            <section>
                <Title message={'Register'} />
                <FormContainer style={{marginTop: '0px'}} onSubmit={registerFormik.handleSubmit}>
                    <Input
                        error={registerFormik.errors.email}
                        inputText={'email@domain.com'}
                        HandleChange={registerFormik.handleChange}
                        inputType={'text'}
                        labelText={'Email'}
                        inputName={'email'}
                        InputValue={registerFormik.values.email}
                    />
                    <Input
                        error={registerFormik.errors.name}
                        inputText={'Jhones Petterson'}
                        HandleChange={registerFormik.handleChange}
                        inputType={'text'}
                        labelText={'Name'}
                        inputName={'name'}
                        InputValue={registerFormik.values.name}
                    />
                    <Input
                        error={registerFormik.errors.password}
                        inputText={'password123'}
                        HandleChange={registerFormik.handleChange}
                        inputType={'password'}
                        labelText={'Password'}
                        inputName={'password'}
                        InputValue={registerFormik.values.password}
                    />
                    <Input
                        error={registerFormik.errors.repeatedPassword}
                        inputText={'password123'}
                        HandleChange={registerFormik.handleChange}
                        inputType={'password'}
                        labelText={'Repeat your password'}
                        inputName={'repeatedPassword'}
                        InputValue={registerFormik.values.repeatedPassword}
                    />
                    <RedirectAuth
                        message={'Do you have an account? Log in here'}
                        linkURL={'/login'}
                    />
                    <ButtonContainer>
                        <Buttons handleSubmit={registerFormik.handleSubmit} register={true} buttonText={'Register'} formMode={true} />
                    </ButtonContainer>
                </FormContainer>
            </section>
        </>
    )
};

export default Register;