import React, { useContext } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import UserContext from '../../context/UserContext'
import Swal from 'sweetalert2'

// Services
import { LoginService } from "../../services/Auth";

// Components
import Navbar from "../../components/Navbar";
import GoBackButton from "../../components/GoBackButton";
import Title from '../../components/Auth/Title';
import Input from "../../components/Auth/Input";
import RedirectAuth from "../../components/Auth/RedirectAuth";
import Buttons from '../../components/Buttons';
import { FormContainer, ButtonContainer } from "../../styles/AuthForms";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required')
});

const Login = () => {
    const { token } = useContext(UserContext);
    const handleSubmit = async ({email, password}) => {
        const result = await LoginService({token, email, password});
        if(result.error) 
            return Swal.fire({
                icon: 'error',
                text: result.message
            });
        else return Swal.fire({
            text: result.message,
            icon: 'success'
        })
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