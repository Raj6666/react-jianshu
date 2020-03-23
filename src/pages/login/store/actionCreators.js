import * as constants from './constants';
import {loginRequest} from '../../../api/api';

const changeLoginStatus = (login) => ({
    type: constants.CHANGE_LOGIN_STATUS,
    isLogin: login
})

export const login = (account, password, props) => {
    return async (dispatch) => {
        const param = {
            requestName: 'login',
            account,
            password
        };

        const res = await loginRequest(param);
        const result = res.data;
        if(res.success) {
            if(result) {
                dispatch(changeLoginStatus(true));
            }
        } else {
            props.history.push({pathname: '/errorPage', 
                state: 
                {
                    status : res.status,
                    message: res.message,
                    exception: res.exception
                }
            });
        }
    }
}

export const logout = () => ({
    type: constants.LOGOUT,
    isLogin: false
})