import _ from 'lodash';
import {FETCH_TRAVEL, FETCH_TRAVELS, DELETE_TRAVEL} from 'actions/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TRAVELS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_TRAVEL:
            return {...state, [action.payload.data.id] : action.payload.data };
        case DELETE_TRAVEL:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}