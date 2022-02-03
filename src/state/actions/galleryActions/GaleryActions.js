import axios from "axios"

export const LoadingPhotos = () => ({
    type: "LOADING_PHOTOS"
})

export const FetchSuccess = (photos) => ({
    type: "FETCH_PHOTOS_SUCCESS",
    payload: photos
})

export const FetchFailure = () => ({
    type: "FETCH_PHOTOS_FAILURE"
})

//Function that get the photos data and set to the state
export const fetchPhotos = (search) => {
    return async (dispatch) => {
        dispatch({ type: "LOADING_PHOTOS" });
        const url = "https://api.unsplash.com";
        const accessKey = "GVKVx2ksAwHGOZEAtKZlyk5Ov5Zs7s4kNvolGYFoIIk";
        try {
            const response = await axios.get(`${url}/photos/random?client_id=${accessKey}&count=8&query=${search}`);
            dispatch({ type: "FETCH_PHOTOS_SUCCESS", payload: response.data });
            console.log(response.data);
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_PHOTOS_FAILURE" });
        }
    }
}
