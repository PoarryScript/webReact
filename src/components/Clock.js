import React from 'react'

class ClockW extends React.Component {


    componentDidMount() {

    }
    componentWillUnmount() {

    }

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (<div>
            <h1>Hello, World,</h1>
            <h2>Ti is component {this.state.date.toLocaleTimeString()}.</h2>
        </div>)
    }
}

export default ClockW;