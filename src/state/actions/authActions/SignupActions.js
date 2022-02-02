export const SignupUser = (user) => ({
    type: "SIGNUP_USER",
    payload: user
})
export const UsersError = (type) => ({
    type: "USERS_ERROR",
    payload: type
})
export const UsersSuccess = (type) => ({
    type: "USERS_SUCCESS",
    payload: type
})
export const StorageUsers = (users) => ({
    type: "GET_STORAGE_USERS",
    payload: users
})


