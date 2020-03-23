
const HOST= 'http://localhost:3000/';
const URL ={
    test: 'http://192.168.101.71:8059/cnmp-rs/qualityVisualization/provincialChart',//接口1
    headerList: HOST+'api/headerList.json', // 头部栏热门搜索数据
    homeData: HOST+'api/homeData.json', // 首页数据请求接口（标签，文章）
    homeArticleList: HOST+'api/homeArticleList.json', // 首页更多文章请求
    detailData: HOST+'api/detailData.json', // 详情页数据
    login: HOST+'api/login.json' // 登录接口
}
export default URL