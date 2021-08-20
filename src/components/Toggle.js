import React from 'react'

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        //为了在回调中使用‘thisi’，这个绑定时必不可少的。
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '开' : '关'}
            </button>
        );
    }

}

export default Toggle;