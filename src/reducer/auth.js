import  {State } from "react-native-gesture-handler";
import { SET_USER, IS_AUTHENTICATED } from "../action/action.types";

const initialState = {
    user: null,
    loading: true,
    isAuthenticated: false
};

export default (state=initialState, action)=>{
    switch (action.type) {
        case SET_USER:
            return {
                ...State,
                user: action.payload,
                loading: false
            }
        case IS_AUTHENTICATED:
            return {
                ...State,
                IS_AUTHENTICATED: action.payload,
                loading: false
            }

        default:
            return state
    }
}