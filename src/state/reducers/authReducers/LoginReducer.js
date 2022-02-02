const INITIAL_STATE = {
    user: null,
    userError: false,
    userSuccess: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload
            };
        case "USER_ERROR":
            return {
                ...state,
                userError: action.payload
            };
        case "USER_SUCCESS":
            return {
                ...state,
                userSuccess: action.payload
            };

        default:
            return state;
    }
};

export default LoginReducer;