import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import TravelReducer from 'reducers/travelReducer';

const rootReducer = combineReducers({
    travel : TravelReducer,
    form : formReducer,
});

export default rootReducer;
