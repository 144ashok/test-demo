import { combineReducers, createStore, applyMiddleware } from 'redux'
import cardReducer from '../Reducers/CardReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cardReducer, // key name same as the carefully renamed default expor
})

const store = createStore(
    rootReducer, applyMiddleware(thunk)
);

export default store;