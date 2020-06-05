import {createStore} from 'redux';
import {ciudad} from '../reducer/cuidad'
const initialState = {
    ciudad : "Bogotá"
}

export const store = createStore(ciudad, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
