// import * as actionTypes from './constants';
import {
    fromJS
} from 'immutable';
import bannerA from '../../../statics/images/home/banner-a.png';
import bannerB from '../../../statics/images/home/banner-b.png';
import bannerC from '../../../statics/images/home/banner-c.png';
import bannerD from '../../../statics/images/home/banner-d.png';
import * as constants from './constants';

// immutable库
// immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    articlePageIndex: 1,
    recommendList: [
        {
            id: 1,
            imgUrl: bannerA
        },
        {
            id: 2,
            imgUrl: bannerB
        },
        {
            id: 3,
            imgUrl: bannerC
        },
        {
            id: 4,
            imgUrl: bannerD
        }
    ],
    scrollTopBtn: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            });
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.articleList)),
                articlePageIndex: state.get('articlePageIndex') + 1
            });
        case constants.TOGGLE_SCROLLTOP_BTN:
            return state.set('scrollTopBtn', action.show);
        default:
            return state;
    }
}