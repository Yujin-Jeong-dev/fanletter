import letter from './../modules/letter';
import filter from '../modules/filter';
const { combineReducers, createStore } = require("redux");



const rootReducer = combineReducers({
    letter,
    filter
});

export const store = createStore(rootReducer);


