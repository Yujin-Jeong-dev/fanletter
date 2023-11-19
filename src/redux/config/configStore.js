import letter from './../modules/letter';
import filter from '../modules/filter';
const { combineReducers, createStore } = require("redux");



const rootReducer = combineReducers({
    letter,
    filter
});

const store = createStore(rootReducer);

export default store;