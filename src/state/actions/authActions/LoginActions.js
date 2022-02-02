export const LoginUser = (user) => ({
    type: "LOGIN_USER",
    payload: user
})
export const UserError = (type) => ({
    type: "USER_ERROR",
    payload: type
})

export const UserSuccess = (type) => ({
    type: "USER_SUCCESS",
    payload: type
})