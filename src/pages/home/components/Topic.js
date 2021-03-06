import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';

class Topic extends PureComponent{
    render() {
        const { list } = this.props; 
        return (
            <TopicWrapper>
                {
                    list.map(item => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')} alt='' />
                                {item.get('title')}
                            </TopicItem>
                        );
                    })
                }
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    // 映射store的数据到当前组件的props中
    return {
        list : state.getIn(['home','topicList'])
    }
};

export default connect(mapStateToProps, null)(Topic);