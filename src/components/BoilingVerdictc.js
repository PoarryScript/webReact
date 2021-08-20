import React, { Component } from 'react'

export default class BoilingVerdictc extends Component {
    constructor(props) {
        super(props);
        this.state = ({ celsius: 0 });
    }
    render() {
        const res = this.props.celsius;
        return (res >= 100 ? <p>The vater would boil.</p> : <p>The water would not boil.</p>);
    }
}
