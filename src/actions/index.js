import axios from 'axios';
import { FETCH_TRAVELS , FETCH_TRAVEL, CREATE_TRAVEL, DELETE_TRAVEL} from 'actions/actionTypes';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dorian123456789';

export function fetchTravels() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type: FETCH_TRAVELS,
        payload: request,
    };
}

export function createTravel(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then( () => callback() );
    return{
        type: CREATE_TRAVEL,
        payload: request,
    };
}

export function fetchTravel(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return{
        type: FETCH_TRAVEL,
        payload: request,
    };
}

export function deleteTravel(id, callback) {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then( () => callback());
    return{
        type: DELETE_TRAVEL,
        payload: id,
    };
}


