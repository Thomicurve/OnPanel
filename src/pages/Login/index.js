import React from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";

import { FormContainer, ButtonContainer } from "./style";

// Components
import Navbar from "../../components/Navbar";
import GoBackButton from "../../components/GoBackButton";
import Title from '../../components/Auth/Title';
import Input from "../../components/Auth/Input";
import RedirectAuth from "../../components/Auth/RedirectAuth";
import Buttons from '../../components/Buttons';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required')
});

const Login = () => {

    const handleSubmit = ({email, password}) => {
        console.log({email, password});
    }

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: (formData) => {
            handleSubmit(formData);
        }
    })

    return (
        <>
            <Navbar/>
            <section>
                <GoBackButton/>
                <Title message={'Login'}/>
                <FormContainer onSubmit={loginFormik.handleSubmit}>
                    <Input 
                        error={loginFormik.errors.email}
                        inputText={'email@domain.com'} 
                        HandleChange={loginFormik.handleChange} 
                        inputType={'text'} 
                        labelText={'Email'}
                        inputName={'email'}
                        InputValue={loginFormik.values.email}
                        />
                    <Input 
                        error={loginFormik.errors.password}
                        inputText={'password123'} 
                        HandleChange={loginFormik.handleChange} 
                        inputType={'password'} 
                        labelText={'Password'}
                        inputName={'password'}
                        InputValue={loginFormik.values.password}
                        />
                    <RedirectAuth 
                        message={'Did you forget your password? Click here'}
                        linkURL={'/reset-password'}
                    />
                    <ButtonContainer>
                        <Buttons handleSubmit={loginFormik.handleSubmit} register={false} buttonText={'Login'} formMode={true}/>
                    </ButtonContainer>
                </FormContainer>
            </section>
        </>
    )
};

export default Login;