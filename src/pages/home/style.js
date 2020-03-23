import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    float: left;
    padding-top: 30px;
    margin-left: 15px;
    width: 625px;
    // background: green;
    .banner-image{
        width: 625px;
        heigth: 270px;
        border-radius: 8px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
    // background: yellow;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
    }
`
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 5px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const ListLoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const RecommendWrapper = styled.div`
    margin: 26px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => (props.imgUrl)});
    background-size: contain;
    margin-bottom: 6px;
    cursor: pointer;
`

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`

export const ScrollTopBtn = styled.div`
    position: fixed;
    right: 100px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #dcdcdc;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
`