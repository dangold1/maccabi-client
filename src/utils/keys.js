
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const GET_USERS_API = `${SERVER_URL}/api/info/all-users`;
export const REGISTER_USER_API = `${SERVER_URL}/api/auth/register`;
export const SIGNIN_USER_API = `${SERVER_URL}/api/auth/signin`;
export const GET_USER_BY_TOEKN_API = `${SERVER_URL}/api/auth/load-user-from-token`;
export const STORAGE_KEY = `MACCABI_USER`;