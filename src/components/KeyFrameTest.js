import React, { Component, Fragment } from 'react'

import '../css/keyframes.scss'
export default class KeyFrameTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSHow: true
        }
        this.onClickEventListener = this.onClickEventListener.bind(this);
    }


    onClickEventListener() {
        this.setState({
            isSHow: !this.state.isSHow,
        })
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.isSHow ? 'showTest' : 'hideTest'}>Key frames 动画测试</div>
                <button onClick={this.onClickEventListener}>按钮</button>
            </Fragment>
        )
    }
}
