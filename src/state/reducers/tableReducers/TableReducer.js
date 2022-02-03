const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
};

const TableReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADING_DATA":
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
};

export default TableReducer;