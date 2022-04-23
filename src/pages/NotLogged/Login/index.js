import React, { useContext, useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import UserContext from '../../../context/UserContext';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

// Services
import { LoginService } from "@services/Auth";

// Components
import Navbar from "@components/NotLogged/Navbar";
import GoBackButton from "@components/NotLogged/GoBackButton";
import Title from '@components/Auth/Title';
import Input from "@components/Auth/Input";
import RedirectAuth from "@components/Auth/RedirectAuth";
import Buttons from '@components/NotLogged/Buttons';
import { FormContainer, ButtonContainer } from "@styles/AuthForms";
import { useCookies } from "react-cookie";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required')
});

const Login = () => {
    const { token, setToken } = useContext(UserContext);
    const [cookies, setCookies] = useCookies(['userID']);
    const history = useHistory();
    
    // Verify if the user is already logged
    useEffect(() => {
        if(token) return history.goBack();
        else return;
    }, [])
    
    const handleSubmit = async ({email, password}) => {
        const result = await LoginService({token, email, password});
        if(result.error) 
        return Swal.fire({
            icon: 'error',
            text: result.message
        });
        
        setToken(result.token);
        setCookies('userID', result.token);
        Swal.fire({
            text: result.message,
            icon: 'success'
        });

        return setTimeout(() => history.push('/'), 1500);
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
                <GoBackButton backText={'Back to home'}/>
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
                        linkURL={'/send-email'}
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