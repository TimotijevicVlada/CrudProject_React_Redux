const INITIAL_STATE = {
    users: [],
    usersError: false,
    usersSuccess: false
};

const SignupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGNUP_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "GET_STORAGE_USERS":
            return {
                ...state,
                users: action.payload
            };
        case "USERS_ERROR":
            return {
                ...state,
                usersError: action.payload
            };
        case "USERS_SUCCESS":
            return {
                ...state,
                usersSuccess: action.payload
            };

        default:
            return state;
    }
};

export default SignupReducer;