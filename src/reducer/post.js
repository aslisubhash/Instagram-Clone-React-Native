// import { ActionSheet } from "native-base";
import { SET_POST, ERROR_POST } from "../action/action.types";

const initialState = {
    post: null,
    loading: true,
    error: false
}


export default (state=initialState, action) =>{
    switch (action.types) {
        case SET_POST:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false
            }
        case ERROR_POST:
            return {
                ...state,  
                error: false
            }
    
        default:
            return state
    }
}