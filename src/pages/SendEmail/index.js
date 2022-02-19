import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Title from '../../components/Auth/Title';
import { FormContainer, ButtonContainer } from '../../styles/AuthForms';
import Buttons from '../../components/Buttons';
import GoBackButton from '../../components/GoBackButton';
import Input from '../../components/Auth/Input';
import { ResetPasswordService } from '../../services/Auth';

const SendEmailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required field'),
});

const SendEmail = () => {
    const history = useHistory();
    const handleSubmit = async (data) => {
        const result = await ResetPasswordService(data);

        if(result.error) return Swal.fire({
            title: result.message,
            icon: 'error'
        });
        else {
            Swal.fire({
                title: result.message,
                icon: 'success'
            });
            return setTimeout(() => {
                history.push('/reset-password');
            }, 2000)
        }
    }

    const emailFormik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: SendEmailSchema,
        onSubmit: (formData) => {
            handleSubmit(formData);
        }
    });

    return (
        <>
            <Navbar />
            <section>
                <Title message={'Reset your password'} />
                <FormContainer style={{ marginTop: 100 }} onSubmit={emailFormik.handleSubmit}>
                    <Input
                        error={emailFormik.errors.email}
                        inputText={'email@domain.com'}
                        HandleChange={emailFormik.handleChange}
                        inputType={'text'}
                        labelText={'Email'}
                        inputName={'email'}
                        InputValue={emailFormik.values.email}
                    />
                    <ButtonContainer>
                        <Buttons handleSubmit={emailFormik.handleSubmit} register={true} buttonText={'Send email'} formMode={true} />
                    </ButtonContainer>
                </FormContainer>
                <GoBackButton backText={'Back to login'} />
            </section>
        </>
    )
}

export default SendEmail;