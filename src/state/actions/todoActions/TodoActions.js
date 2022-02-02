export const AddTodo = (item) => ({
    type: "ADD_TODO",
    payload: item
})
export const UpdateTodo = (item) => ({
    type: "UPDATE_TODO",
    payload: item
})
export const EditingTodo = (item) => ({
    type: "EDITING_TODO",
    payload: item
})
export const CompleteTodo = (item) => ({
    type: "COMPLETE_TODO",
    payload: item
})
export const DeleteTodo = (item) => ({
    type: "DELETE_TODO",
    payload: item
})