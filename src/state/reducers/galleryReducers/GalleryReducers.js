const INITIAL_STATE = {
    photos: [],
    isLoading: false,
    error: false,
};

const GalleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADING_PHOTOS":
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case "FETCH_PHOTOS_SUCCESS":
            return {
                ...state,
                photos: action.payload,
                isLoading: false,
            };
        case "FETCH_PHOTOS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
};

export default GalleryReducer;