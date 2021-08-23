import React, { Component } from 'react'


function Dialog(props) {
    return (<FancyBorder color="blue"><h1 className="Dialog-title">{props.title}</h1>
        <p className="Dialog-message">{props.message}</p>
    </FancyBorder>);
}
function FancyBorder(props) {
    return (<div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>);
}

export default class SignUpDialog extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: ' ' };

    }


    handleChange(e) {
        this.setState({ login: e.target.value });
    }
    handleSignUp(e) {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (<Dialog title="Combation Dialog from Component" message="How refer to you?">
            <input value={this.state.login} onChange={this.handleChange} />
            <button onClick={this.handleSignUp}>Sign Me Up!</button>
        </Dialog>
        );
    }
}
