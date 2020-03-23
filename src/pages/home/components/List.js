import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {ListItem, ListInfo, ListLoadMore} from '../style';
import { actionCreators } from '../store';
import { Modal } from 'antd';


class List extends PureComponent{

    render() {
        const { list, getMoreList } = this.props;
       
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link  key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')} alt=''/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <ListLoadMore onClick={getMoreList}>更多文章</ListLoadMore>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.httpRequestError !== nextProps.httpRequestError) {
            Modal.error({
                title: '请求失败',
                content: nextProps.httpErrorMessage
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home','articleList']),
        httpRequestError: state.getIn(['http','httpRequestError']),
        httpErrorMessage: state.getIn(['http','httpErrorMessage'])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList() {
            dispatch(actionCreators.getMoreArticleList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);