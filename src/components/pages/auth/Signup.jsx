import { useFormik } from 'formik';
import { validate } from "../../../validation/SignupValidation";
import { useSelector, useDispatch } from 'react-redux';

const Signup = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.signup);
    const { users, usersError, usersSuccess } = auth;

    const formik = useFormik({
        initialValues: {
            id: null,
            username: "",
            email: "",
            password: ""
        },
        validate,
        onSubmit: (values) => {
            const check = users.find(item => item.username === values.username || item.email === values.email);
            const newUser = { ...values, id: Math.floor(Math.random() * 1000000) }
            console.log(newUser);
            if (check) {
                dispatch({ type: "USERS_ERROR", payload: true });
                dispatch({ type: "USERS_SUCCESS", payload: false });
            } else {
                dispatch({ type: "SIGNUP_USER", payload: newUser });
                dispatch({ type: "USERS_ERROR", payload: false });
                dispatch({ type: "USERS_SUCCESS", payload: true });
            }
        },
    });

    return (
        <div className='signup'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Signup</h2>
                <div className='signup_content'>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        name='username'
                        type="text"
                        placeholder='Username'
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="input_error">{formik.errors.username}</div>
                    )}
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name='email'
                        type="text"
                        placeholder='Email'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="input_error">{formik.errors.email}</div>
                    )}
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        name='password'
                        type="password"
                        placeholder='Password'
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="input_error">{formik.errors.password}</div>
                    )}
                    <button type='submit'>Signup</button>
                    {usersError && <div className='error'>This user already exist!</div>}
                    {usersSuccess && <div className='success'>User has been created!</div>}
                </div>
            </form>
        </div>
    )
};

export default Signup;
