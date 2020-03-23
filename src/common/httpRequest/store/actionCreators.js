import * as constants from './constants';

export const showHttpRequestError = (message) => ({
    type: constants.SHOW_HTTP_REQUEST_ERROR,
    message: message
})