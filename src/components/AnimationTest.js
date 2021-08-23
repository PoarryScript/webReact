import React, { Component, Fragment } from 'react'

import '../css/anim.scss'

export default class AnimationTest extends Component {

    constructor(prosp) {
        super(prosp);
        this.state = { isShow: false };
        this.onButtonStatusChange = this.onButtonStatusChange.bind(this);
    }


    onButtonStatusChange() {
        let show = this.state.isShow;
        show = !show;
        this.setState({
            isShow: show,
        })


    }

    render() {
        return (
            <Fragment>
                <div className={this.state.isShow ? 'showView' : 'hideView'}>动画测试的文本</div>
                <button onClick={this.onButtonStatusChange}>更改状态</button>

            </Fragment>
        )
    }
}
