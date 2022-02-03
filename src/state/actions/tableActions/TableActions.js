import axios from "axios"

export const LoadingData = () => ({
    type: "LOADING_DATA"
})

export const FetchSuccess = (photos) => ({
    type: "FETCH_DATA_SUCCESS",
    payload: photos
})

export const FetchFailure = () => ({
    type: "FETCH_DATA_FAILURE"
})

//Function that get the data data and set to the state
export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: "LOADING_DATA" });
        const url = "http://localhost:5000/posts";
        try {
            const response = await axios.get(url);
            dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
            //console.log(response);
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_DATA_FAILURE" });
        }
    }
}

//Function that delete the post
export const deleteData = (id) => {
    return async (dispatch) => {
        const url = `http://localhost:5000/posts/${id}`;
        try {
            await axios.delete(url);
            dispatch(fetchData());
        } catch (error) {
            console.log(error);
        }
    }
}
