import React from 'react';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { FormContainer, ButtonContainer } from "@styles/AuthForms";
import Swal from 'sweetalert2';
import { RegisterService } from '@services/Auth';
import { useHistory } from 'react-router-dom';

// Components
import Navbar from "@components/NotLogged/Navbar";
import GoBackButton from "@components/NotLogged/GoBackButton";
import Title from '@components/Auth/Title';
import Input from "@components/Auth/Input";
import RedirectAuth from "@components/Auth/RedirectAuth";
import Buttons from '@components/NotLogged/Buttons';

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required field'),
    name: Yup.string().required('Required field'),
    password: Yup.string().required('Required field').min(8, 'The password must have 8 characters minimum'),
    repeatedPassword: Yup.string().required('Required field').oneOf([Yup.ref('password')], 'Passwords are not the same'),
});


const Register = () => {

    const history = useHistory();

    const handleSubmit = async (data) => {
        const result = await RegisterService(data);
        
        if(result.error)
            return Swal.fire({
                icon: 'error',
                text: result.message
            });
        
        else
            Swal.fire({
                icon: 'success',
                text: result.message
            });
            setTimeout(() => history.push('/login'), 2000 );
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
                <GoBackButton backText={'Back to home'}/>
            </section>
        </>
    )
};

export default Register;