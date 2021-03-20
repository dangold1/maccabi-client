import { put, takeLatest, call } from 'redux-saga/effects';
import {
  USERS_REQUSET_ERROR,
  USERS_REQUSET_LOADING,
  USERS_REQUSET_SUCCESS
} from "../constants/usersConstants";
import { GET_USERS_API } from "../../utils/keys";
import axiosService from "../../services/axios.service";

const fetchUsers = async () => {
  try {
    const { data } = await axiosService.send({ url: GET_USERS_API });
    return data;
  } catch (err) {
    console.log({ err });
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

export function* rootSaga() {
  yield takeLatest(USERS_REQUSET_LOADING, watchFetchUsers);
}

export default rootSaga;
