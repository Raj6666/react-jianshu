import {
    fromJS
} from 'immutable';
import * as constants from './constants';

// immutable库
// immutable对象
const defaultState = fromJS({
    httpRequestError: false,
    httpErrorMessage: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SHOW_HTTP_REQUEST_ERROR:
            return state.merge({
                httpRequestError: ! state.get('httpRequestError'),
                httpErrorMessage: action.message
            });
        default:
            return state;
    }
}