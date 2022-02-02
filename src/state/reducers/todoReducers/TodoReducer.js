const INITIAL_STATE = {
    todos: []
}

const TodosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            };
        case "UPDATE_TODO":
            const updatedTodos = state.todos.map((item) =>
                item.id === action.payload.id ? {
                    ...item,
                    description: action.payload.description
                } : item);
            return {
                todos: updatedTodos
            }
        case "EDITING_TODO":
            const setEditing = state.todos.map((item) =>
                item.id === action.payload.id ? {
                    ...action.payload,
                    isEditing: !action.payload.isEditing
                } : item);
            return {
                todos: setEditing
            }
        case "COMPLETE_TODO":
            const completed = state.todos.map(item => item.id === action.payload.id ? {
                ...action.payload,
                completed: !action.payload.completed
            } : item)
            return {
                todos: completed
            }
        case "DELETE_TODO":
            const deletedTodo = state.todos.filter(item => item.id !== action.payload.id);
            return {
                todos: deletedTodo
            }
        default:
            return state;
    }
}

export default TodosReducer;