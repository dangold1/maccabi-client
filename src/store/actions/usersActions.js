import {
    USERS_REQUSET_LOADING,
    LOAD_USER_FROM_TOKEN,
    CLEAR_PREVIOUS_USER,
    SET_LOGIN_USER
} from "../constants/usersConstants";

export const loadUsersAction = () => ({ type: USERS_REQUSET_LOADING });
export const loadUserFromTokenAction = () => ({ type: LOAD_USER_FROM_TOKEN });
export const setLoginUserAction = (loginUser) => ({ type: SET_LOGIN_USER, loginUser });
export const clearPreviousLogedUser = () => ({ type: CLEAR_PREVIOUS_USER });