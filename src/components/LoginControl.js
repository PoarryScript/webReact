import React from 'react'

function LoginButton(props) {
    return (<button onClick={props.onClick}>Login</button>);
}
function LogoutButton(props) {
    return (<button onClick={props.onClick}>Logout</button>);
}

class LoginControl extends React.Component {



    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoginedIn: true };

    }


    handleLoginClick() {
        this.setState({ isLoginedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoginedIn: false });
    }

    render() {
        const isLogined = this.state.isLoginedIn;
        let button;
        if (isLogined) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onclick={this.handleLoginClick} />;
        }
        return button;
    }
}
export default LoginControl;