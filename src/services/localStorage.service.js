import { STORAGE_KEY } from '../utils/keys';

const localStorageService = {}

localStorageService.saveUser = user => localStorage.setItem(STORAGE_KEY, JSON.stringify(user));

localStorageService.getUser = () => JSON.parse(localStorage.getItem(STORAGE_KEY));

localStorageService.getToken = () => JSON.parse(localStorage.getItem(STORAGE_KEY))?.token;

export default localStorageService;
