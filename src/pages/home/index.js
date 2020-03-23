import React, {PureComponent} from 'react';
import  {HomeWrapper, HomeLeft, HomeRight, ScrollTopBtn} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import { actionCreators }  from './store';

class Home extends PureComponent{

    handelScrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-image' src='//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.scrollTopBtn ? <ScrollTopBtn onClick={this.handelScrollTop}>顶部</ScrollTopBtn> : null
                }
            </HomeWrapper>
        );
    }

    // 当页面组件挂载完毕后，请求首页数据
    componentDidMount() {
        this.props.getHomeData();
        this.bindWindowEvent();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.toggleScrollTopBtn);
    }

    bindWindowEvent() {
        window.addEventListener('scroll', this.props.toggleScrollTopBtn);
    }
}

const mapStateToProps = (state) => {
    return {
        scrollTopBtn: state.getIn(['home','scrollTopBtn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getHomeData(){
            // 引用actionCreators中的异步请求，但也一定记得要用dispatch方法派发出去才能调用方法
            dispatch(actionCreators.getHomeInfo());
        },
        toggleScrollTopBtn() {
            // 向下拉动页面200px时显示回到顶部按钮
            if(document.documentElement.scrollTop > 200) {
                dispatch(actionCreators.toggleScrollTopBtn(true));
            } else {
                dispatch(actionCreators.toggleScrollTopBtn(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);