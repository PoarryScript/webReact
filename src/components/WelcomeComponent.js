import React from 'react'

class WelcomeComponent extends React.Component {
    render() {
        return <h1>Welcome内 {this.props.name}</h1>;
    }
}

export default WelcomeComponent;