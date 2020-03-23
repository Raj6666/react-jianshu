import React, {PureComponent} from 'react';
import { LoginWrapper, LoginBox, Input, LoginButton } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';

class Login extends PureComponent{
    render() {
        const { loginStatus } = this.props;
        if(loginStatus) {
            // 如果已登录 则跳转至首页
            return (
                <Redirect to='/' />
            );
        } else {
            // 如果未登录 则展示登录框
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.accountDom = input}}></Input>
                        <Input placeholder='密码' ref={(input) => {this.passwordDom = input}} type='password'></Input>
                        <LoginButton onClick={() => this.props.login(this.accountDom, this.passwordDom, this.props)}>登录</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'isLogin'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(accountElem, passwordElem, prop) {
            dispatch(actionCreators.login(accountElem.value, passwordElem.value, prop));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);