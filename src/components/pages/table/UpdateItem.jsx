import { useRef } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateData } from '../../../state/actions/tableActions/TableActions';
import { validate } from '../../../validation/TableValidation';

const CreateItem = ({ setUpdateVisible, itemToUpdate }) => {

    //Function that exit the form when we click out of the form
    const handleExit = (e) => {
        if (!formRef.current.contains(e.target)) {
            setUpdateVisible(false);
        }
    };
    const formRef = useRef();
    const dispatch = useDispatch();

    //Formik library
    const formik = useFormik({
        initialValues: {
            title: itemToUpdate.title,
            body: itemToUpdate.body,
        },
        validate,
        onSubmit: (values) => {
            dispatch(updateData(values, itemToUpdate));
            setTimeout(() => {
                setUpdateVisible(false);
            }, 500)
        },
    });

    return (
        <div onClick={handleExit} className='create'>
            <form onSubmit={formik.handleSubmit} ref={formRef}>
                <h2>Update</h2>
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
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
};

export default CreateItem;
