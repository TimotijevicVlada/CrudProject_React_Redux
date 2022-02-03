import { useFormik } from 'formik';
import { validate } from '../../../validation/LoginValidation';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.login);
    const allUsers = useSelector(state => state.signup);
    const { userError, userSuccess } = currentUser;
    const { users } = allUsers;

    //Formik library
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate,
        onSubmit: (values) => {
            const check = users.find(item => item.email === values.email && item.password === values.password);
            if (check) {
                dispatch({ type: "LOGIN_USER", payload: check });
                dispatch({ type: "USER_SUCCESS", payload: true });
                dispatch({ type: "USER_ERROR", payload: false });
                setTimeout(() => {
                    window.location.replace("/table");
                }, 1000)
            } else {
                dispatch({ type: "USER_ERROR", payload: true });
                dispatch({ type: "USER_SUCCESS", payload: false });
            }
        },
    });

    return (
        <div className='login'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Login</h2>
                <div className='login_content'>
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
                    <button type="submit">Login</button>
                    {userError && <div className='error'>Something went wrong. Try again!</div>}
                    {userSuccess && <div className='success'>You are logged in!</div>}
                </div>
            </form>
        </div>
    )
};

export default Login;
