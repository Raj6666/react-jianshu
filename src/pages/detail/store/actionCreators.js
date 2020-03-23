import * as constants from './constants';
import {actionCreators as httpActions} from '../../../common/httpRequest/store';
import {getDetailData} from '../../../api/api';

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title: title,
    content: content
})


export const getDetail = (id) => {
    return async (dispatch) => {
        const param = {
            requestName: 'detailData',
            id: id
        };

        const res = await getDetailData(param);
        if(res.success) {
            const result = res.data;
            dispatch(changeDetail(result.title, result.content));
        } else {
            dispatch(httpActions.showHttpRequestError('获取文章详细数据失败，请重试！'));
        }
    }
}