import { put, takeLatest, call } from 'redux-saga/effects';
import {
  USERS_REQUSET_ERROR,
  USERS_REQUSET_LOADING,
  USERS_REQUSET_SUCCESS,
  LOAD_USER_FROM_TOKEN,
} from "../constants/usersConstants";
import {
  GET_USERS_API,
  GET_USER_BY_TOEKN_API
} from "../../utils/keys";
import axiosService from "../../services/axios.service";
import localStorageService from "../../services/localStorage.service";

const fetchUsers = async () => {
  try {
    const { data } = await axiosService.send({ url: GET_USERS_API });
    return data;
  } catch (err) {
    throw err;
  }
}

function* watchFetchUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put({ type: USERS_REQUSET_SUCCESS, data: users });
  } catch (e) {
    yield put({ type: USERS_REQUSET_ERROR, error: e.message });
  }
}

const fetchLoginUser = async () => {
  try {
    const token = localStorageService.getToken();
    const { data } = await axiosService.send({
      url: GET_USER_BY_TOEKN_API,
      params: { token }
    });
    return data;
  } catch (err) {
    throw err;
  }
}

function* watchLoginUser() {
  try {
    const loginUser = yield call(fetchLoginUser);
    yield put({ type: LOAD_USER_FROM_TOKEN, loginUser });
  } catch (e) {
    yield put({ type: LOAD_USER_FROM_TOKEN, loginUser: null });
  }
}

export function* rootSaga() {
  yield takeLatest(USERS_REQUSET_LOADING, watchFetchUsers);
  yield call(watchLoginUser);
}

export default rootSaga;
