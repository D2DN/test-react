import axios from 'axios';

export const FETCH_TRAVELS = 'fetch_travels';
export const FETCH_TRAVEL = 'fetch_travel';
export const CREATE_TRAVEL = 'create_travel';
export const DELETE_TRAVEL = 'delete_travel';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
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
    debugger
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


