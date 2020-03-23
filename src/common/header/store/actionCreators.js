import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import {getheaderList} from '../../../api/api';

const changeListAction = (data) => ({
    type : actionTypes.CHANGE_SEARCH_LIST,
    data : fromJS(data),
    pageTotal : Math.ceil(data.length / 5)
})

export const getSearchFocusedAction = (isFocused) => ({
    type : actionTypes.SEARCH_FOCUSED_CHANGED,
    isFocused : isFocused
})

export const mouseEnter = () => ({
    type : actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
    type : actionTypes.MOUSE_LEAVE,
})

export const changePage = (page) => ({
    type : actionTypes.PAGE_CHANGE,
    pageIndex: page
})

export const getList = () => {
    return async (dispatch) => {
        const param = {
            requestName: 'headerList'
        };
        const res = await getheaderList(param);
        const result = res.data;
        dispatch(changeListAction(result));
    }
}