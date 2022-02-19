import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { ChangePassword } from '../../services/Auth';

import Navbar from '../../components/Navbar';
import Title from '../../components/Auth/Title';
import { FormContainer, ButtonContainer } from '../../styles/AuthForms';
import Buttons from '../../components/Buttons';
import Input from '../../components/Auth/Input';

const ResetPasswordSchema = Yup.object().shape({
    code: Yup.string().required('Required field'),
    password: Yup.string().required('Required field').min(8, 'The password must have 8 characters minimum'),
    repeatedPassword: Yup.string().required('Required field').oneOf([Yup.ref('password')], 'Passwords are not the same'),
});

const ResetPassword = () => {
    const history = useHistory();

    const handleSubmit = async (data) => {
        const resetPasswordResult = await ChangePassword(data);

        if(resetPasswordResult.error) 
            return Swal.fire({
                title: resetPasswordResult.message,
                icon: 'error'
            });
        else 
            Swal.fire({
                title: resetPasswordResult.message,
                icon: 'success'
            });
            return setTimeout(() => history.push('/login'), 1500);
    }

    const resetPasswFormik = useFormik({
        initialValues: {
            code: '',
            password: '',
            repeatedPassword: ''
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: (formData) => {
            handleSubmit(formData);
        }
    });

    return (
        <>
            <Navbar />
            <section>
                <Title message={'Enter the code'} />
                <FormContainer style={{ marginTop: 100 }} onSubmit={resetPasswFormik.handleSubmit}>
                    <Input
                        error={resetPasswFormik.errors.code}
                        inputText={'enter the code sent on your email'}
                        HandleChange={resetPasswFormik.handleChange}
                        inputType={'text'}
                        labelText={'Code'}
                        inputName={'code'}
                        InputValue={resetPasswFormik.values.code}
                    />
                    <Input
                        error={resetPasswFormik.errors.password}
                        inputText={'password123'}
                        HandleChange={resetPasswFormik.handleChange}
                        inputType={'password'}
                        labelText={'Password'}
                        inputName={'password'}
                        InputValue={resetPasswFormik.values.password}
                    />
                    <Input
                        error={resetPasswFormik.errors.repeatedPassword}
                        inputText={'password123'}
                        HandleChange={resetPasswFormik.handleChange}
                        inputType={'password'}
                        labelText={'Repeate the password'}
                        inputName={'repeatedPassword'}
                        InputValue={resetPasswFormik.values.repeatedPassword}
                    />
                    <ButtonContainer>
                        <Buttons handleSubmit={resetPasswFormik.handleSubmit} register={true} buttonText={'Send email'} formMode={true} />
                    </ButtonContainer>
                </FormContainer>
            </section>
        </>
    )
};

export default ResetPassword;