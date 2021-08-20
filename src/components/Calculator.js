import React, { Component } from 'react'
import BoilingVerdictc from './BoilingVerdictc';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {

        const temperature = this.state.temperature;

        return (<fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature}
                onChange={this.handleChange}
            />
            <BoilingVerdict celsius={parseFloat(temperature)} />
            <BoilingVerdictc celsius={parseFloat(temperature)} />

        </fieldset>
        );
    }
}
function BoilingVerdict(prpos) {
    if (prpos.celsius >= 100) {
        return <p>The vater would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
