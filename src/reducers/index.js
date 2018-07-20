import { combineReducers } from 'redux';
import TravelReducer from './reducer_travel';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    travel : TravelReducer,
    form : formReducer,
});

export default rootReducer;
