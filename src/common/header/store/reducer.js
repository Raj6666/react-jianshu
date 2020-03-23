import * as actionTypes from './constants';
import { fromJS } from 'immutable';

// immutable库
// immutable对象
const defaultState = fromJS({
    searchFocused : false,
    mouseIn: false,
    list: [],
    pageIndex: 1,
    pageSize: 5,
    pageTotal: 1
});

export default (state = defaultState, action) => {
    
    switch(action.type) {
        case actionTypes.SEARCH_FOCUSED_CHANGED:
            // immutable对象的set方法，会结合之前你的immutable对象的值
            // 和设置的值，返回一个全新的对象
            return state.set('searchFocused', action.isFocused);
        case actionTypes.CHANGE_SEARCH_LIST:
            return state.merge({
                'list': action.data,
                'pageTotal': action.pageTotal
            });
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.PAGE_CHANGE:
            return state.set('pageIndex', action.pageIndex);
        default:
            return state;
    }
}