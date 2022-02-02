import React from 'react';
import { useFormik } from 'formik';
import { validate } from '../../../validation/LoginValidation';

const Login = () => {

    //Formik library
    const formik = useFormik({
        initialValues: {
            id: "",
            username: "",
            email: "",
            password: ""
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className='login'>
            <form>
                <h2>Login</h2>
                <div className='login_content'>
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
};

export default Login;
