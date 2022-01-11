import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import {useCookies} from 'react-cookie';
import UserContext from '../context/UserContext';

export default function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [cookie ,setCookie] = useCookies();

    const {setToken} = useContext(UserContext);

    const onSubmit = data => {
        setCookie('idUser', data.email);
        setToken({token: data.email})
    }

    return (
        <div>
            <p>This is the login page</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", {required: true})} placeholder="Email"/>
                {errors.email?.type === 'required' && <p style={{color: 'red'}}>Email is required</p>}

                <input type="password" {...register("password", {required:true})} placeholder="Password"/>
                {errors.password?.type === 'required' && <p style={{color: 'red'}}>password is required</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
