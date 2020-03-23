import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button, SearchWrapper } from './style';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators }  from '../../pages/login/store';
import { Link } from 'react-router-dom';


class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.getListArea = this.getListArea.bind(this);
    }

    getListArea = () => {
        const {focused, mouseIn, list, pageIndex, pageTotal, handelMouseEnter, handelMouseLeave, handelPageChange} = this.props;
        
        if(focused || mouseIn){
            const jsList = list.toJS();
            const pageList = [];
            if (jsList.length > 0) {
                for (let i = (pageIndex - 1) * 5; i < pageIndex * 5; i++) {
                    if(jsList[i] !== undefined) {
                        pageList.push(
                            <SearchInfoItem key={jsList[i].title}>{jsList[i].title}</SearchInfoItem>
                        );
                    }
                }
            }

            return (
                <SearchInfo onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handelPageChange(pageIndex, pageTotal, this.spinIcon)}}>
                        <i ref={(spin) => {this.spinIcon = spin}}  className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null
        }
    }

    render() {
        const {focused, list, isLogin, handelInputFocus, logout} = this.props;
        return (
            <HeaderWrapper>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            isLogin ? <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                        }
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'>
                                <NavSearch className={focused ? 'focused' : ''} 
                                    onFocus={() => {handelInputFocus(true, list)}}
                                    onBlur={() => {handelInputFocus(false, list)}}>
                                </NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/writeArticle'>
                            <Button className='writting'>
                                <i className="iconfont">&#xe607;</i>写文章
                            </Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('searchFocused'),
        list: state.getIn(['header', 'list']),
        pageIndex: state.getIn(['header', 'pageIndex']),
        pageTotal: state.getIn(['header', 'pageTotal']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        isLogin: state.getIn(['login', 'isLogin'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handelInputFocus(isFocused, list){
            isFocused && list.size === 0 &&  dispatch(actionCreators.getList());
            
            dispatch(actionCreators.getSearchFocusedAction(isFocused));
        },
        handelMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handelMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handelPageChange(pageIndex, pageTotal, spinIcon) {
            // 换一换的转圈动画实现

            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
            console.log(originAngle);
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            // 换一换的换页功能实现
            if (pageIndex < pageTotal) {
                dispatch(actionCreators.changePage(pageIndex + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);