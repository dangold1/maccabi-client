import {
    LOAD_USER_FROM_TOKEN,
    CLEAR_PREVIOUS_USER,
    SET_LOGIN_USER,
} from "../constants/usersConstants";

import localStorageService from "../../services/localStorage.service";

const initialState = { loginUser: null };

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_USER:
            return {
                ...state,
                loginUser: action.loginUser
            };
        case LOAD_USER_FROM_TOKEN:
            return {
                ...state,
                loginUser: action.loginUser
            };
        case CLEAR_PREVIOUS_USER:
            localStorageService.saveUser(null)
            return {
                ...state,
                loginUser: null
            };
        default: return state;
    }
}
