import React from 'react';
import { useFormik } from 'formik';
import { validate } from "../../../validation/SignupValidation";

const Signup = () => {


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
        <div className='signup'>
            <form>
                <h2>Signup</h2>
                <div className='signup_content'>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <button>Signup</button>
                </div>
            </form>
        </div>
    )
};

export default Signup;
