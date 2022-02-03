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

//Function that get the data and set to the state
export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: "LOADING_DATA" });
        try {
            const response = await axios.get("http://localhost:5000/posts");
            dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_DATA_FAILURE" });
        }
    }
}

//Function that delete the data
export const deleteData = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:5000/posts/${id}`);
            dispatch(fetchData());
        } catch (error) {
            console.log(error);
        }
    }
}

//Function that create the data
export const createData = (newPost) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:5000/posts", newPost);
            dispatch(fetchData());
        } catch (error) {
            console.log(error);
        }
    }
}

//Function that update the data
export const updateData = (updatedPost, itemToUpdate) => {
    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:5000/posts/${itemToUpdate.id}`, updatedPost);
            dispatch(fetchData());
        } catch (error) {
            console.log(error);
        }
    }
}