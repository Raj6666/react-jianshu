import React, {PureComponent} from 'react';
import {DetailWrapper, Header, Content} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd';

class Detail extends PureComponent{
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
               <Header>{title}</Header>
               <Content 
                dangerouslySetInnerHTML={{__html: content}}
               />
            </DetailWrapper>
        );
    }

    async componentWillMount() {
        this.props.getDetail(this.props.match.params.id);
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
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
        httpRequestError: state.getIn(['http','httpRequestError']),
        httpErrorMessage: state.getIn(['http','httpErrorMessage'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));