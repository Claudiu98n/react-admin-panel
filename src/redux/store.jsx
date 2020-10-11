import {createStore} from 'redux';
import {colorReducer} from './reducers/ColorReducer';

const store = createStore(colorReducer);

export default store;