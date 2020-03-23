import server from './server';
import url from './serviceAPI.config';
import qs from 'qs'; // 可将对象转化成json字符串
 
//接口1方法 (使用post请求)
export function testRequest(data){
    return server({
        url: url.test,
        method: 'post',
        dataType: "json",
	    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: qs.stringify(data)
    })
};

// 头部栏热门搜素数据请求接口
export function getheaderList(data){
    return server({
        url: url.headerList,
        method: 'get',
        dataType: "json",
	    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
};

// 首页数据请求接口（标签，文章）
export function getHomeData(data){
    return server({
        url: url.homeData,
        method: 'get',
        dataType: "json",
	    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
};

// 首页更多文章数据请求接口
export function getHomeArticleList(data){
    return server({
        url: url.homeArticleList,
        method: 'get',
        dataType: "json",
	    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
};

// 详情页数据请求接口
export function getDetailData(data){
    return server({
        url: url.detailData,
        method: 'get',
        dataType: "json",
	    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
};

// 登录接口
export function loginRequest(data){
    return server({
        url: url.login,
        method: 'get',
        dataType: "json",
	    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
};