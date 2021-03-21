import {
    USERS_REQUSET_ERROR,
    USERS_REQUSET_LOADING,
    USERS_REQUSET_SUCCESS
} from "../constants/usersConstants";

const initialState = { users: [], isLoading: false, error: null };

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUSET_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case USERS_REQUSET_SUCCESS:
            return { ...state, isLoading: false, users: action.data };

        case USERS_REQUSET_ERROR:
            return { ...state, isLoading: false, error: action.error };

        default: return state;
    }
}
