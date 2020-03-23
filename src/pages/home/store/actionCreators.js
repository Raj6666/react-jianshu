import * as constants from './constants';
import {actionCreators as httpActions} from '../../../common/httpRequest/store';
import {getHomeData, getHomeArticleList} from '../../../api/api'

// 正常的对象类型的action
const changHomeData = (result) => ({
    type : constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList
})

const addHomeArticleList = (result) => ({
    type: constants.ADD_ARTICLE_LIST,
    articleList: result
})

// 由于使用了redux-thunk，所以可以把异步请求写入actionCreators中，
export const getHomeInfo = () => {
    return async (dispatch) => {
        const param = {
            requestName: 'homeData'
        };

        /* 请求统一控制的模式下的请求方式  */
        const res = await getHomeData(param);
        const result = res.data;
        dispatch(changHomeData(result));
    }
}

export const getMoreArticleList = () => {
    return async (dispatch) => {
        const param = {
            requestName: 'homeArticleList'
        };

        /* 请求统一控制的模式下的请求方式  */
        /* 当请求失败时，页面中展示弹窗 */
        const res = await getHomeArticleList(param);
        if(res.success) {
            const result = res.data;
            dispatch(addHomeArticleList(result));
        } else {
            dispatch(httpActions.showHttpRequestError('获取更多文章数据失败，请重试！'));
        }
    }
}

export const toggleScrollTopBtn = (show) => ({
    type: constants.TOGGLE_SCROLLTOP_BTN,
    show: show
})