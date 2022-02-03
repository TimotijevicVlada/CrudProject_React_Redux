import { useRef } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createData } from '../../../state/actions/tableActions/TableActions';
import { validate } from '../../../validation/TableValidation';

const CreateItem = ({ setCreateVisible }) => {

    //Function that exit the form when we click out of the form
    const handleExit = (e) => {
        if (!formRef.current.contains(e.target)) {
            setCreateVisible(false);
        }
    };
    const formRef = useRef();
    const dispatch = useDispatch();


    //Formik library
    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
        },
        validate,
        onSubmit: (values) => {
            dispatch(createData(values));
            setTimeout(() => {
                setCreateVisible(false);
            }, 500)
        },
    });

    return (
        <div onClick={handleExit} className='create'>
            <form onSubmit={formik.handleSubmit} ref={formRef}>
                <h2>Create</h2>
                <div className='create_content'>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        name='title'
                        type="text"
                        placeholder='Title'
                    />
                    {formik.touched.title && formik.errors.title && (
                        <div className="error">{formik.errors.title}</div>
                    )}
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.body}
                        name='body'
                        type="text"
                        placeholder='Body'
                    />
                    {formik.touched.body && formik.errors.body && (
                        <div className="error">{formik.errors.body}</div>
                    )}
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
};

export default CreateItem;
