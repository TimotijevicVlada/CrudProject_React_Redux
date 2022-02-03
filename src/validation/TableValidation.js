export const validate = (values) => {
    let errors = {};

    //Validate title
    if (!values.title) {
      errors.title = "Title is required!";
    } 

    //Validate body
    if (!values.body) {
      errors.body = "Body is required!";
    } 

    return errors;
} 