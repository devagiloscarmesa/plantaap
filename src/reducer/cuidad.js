import {SET_CIUDAD} from '../actions';

export const ciudad = (state, action) => {
    switch (action.type) {
        case SET_CIUDAD:
            return {...state, ciudad:action.value};
        default:
            return state;
    }
}