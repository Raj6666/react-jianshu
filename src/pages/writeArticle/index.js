import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class WriteArticle extends PureComponent{
    render() {
        const { loginStatus } = this.props;
        if(loginStatus) {
            // 如果已登录 则展示写文章页面
            return (
                <div>写文章啦</div>
            );
        } else {
            // 如果未登录 则跳转至登录页
            return (
                <Redirect to='/login' />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'isLogin'])
    }
}

export default connect(mapStateToProps, null)(WriteArticle);