import {createStore} from 'redux';
import reducer from './modules/rootReducer';

const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(reducer, enhancer);

export default store;
