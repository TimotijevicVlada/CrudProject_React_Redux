export const validate = (values) => {
    let errors = {};

    //Validate username
    let usernameTest = /^[A-Z][a-z]{2,}/.test(values.username.trim());
    if (!values.username.trim()) {
      errors.username = "Username is required!";
    } else if (!usernameTest) {
        errors.username = "Username is invalid!";
    } 

    //Validate email
    let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email);
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailTest) {
      errors.email = "Email is invalid!";
    } 

    //Validate password
    let passTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password);
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!passTest) {
      errors.password = "Password require uppercase, lowercase and number, min 8 caracters. Example: Alex1234";
    }

    return errors;
} 