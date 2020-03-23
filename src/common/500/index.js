import React, {PureComponent} from 'react';

class Error500 extends PureComponent{
    render() {
        console.log(this.props.location.state);
        return (
            <div>
                对不起~页面请求出错啦宝贝。。。。
            </div>
        );
    }
}

export default Error500;