import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomeComponent from './components/WelcomeComponent';

import ClockW from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import NameForm from './components/NameForm';
import EasyForm from './components/EasyForm';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation ';
import Calculator from './components/Calculator';



function TestPropos(props) {

  return <h1>fun propos={props.name}</h1>
}
function Clock(props) {

  return (<div><h1>Hello,World,</h1>
    <h2>Clock It is {props.date.toLocaleTimeString()}.</h2></div>);
}

function Greeting(props) {
  const isLogined = props.isLogined;
  if (isLogined) {

    return <h1>Welcome Back!</h1>
  } else {
    return <h1>Please sign in!</h1>
  }
}


function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Mailbox Hello!</h1>
      {unreadMessages.length} {'>'} 0 && <h2>You have {unreadMessages.length} unread messages.</h2>

    </div>
  );
}
const messgaes = ['React', 'Re:React', 'ReLre :React'];

const numbers = [1, 2, 3, 4, 5, 6, 7];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);
function tick() {
  const element = <div>
    
    <br /> <br />
    <Calculator />
    <br /> <br />
    <h1>Hello,World!</h1>
    <ClockW />
    <Clock date={new Date()} />
    <WelcomeComponent name="WelcomeComponent" />
    <TestPropos name="TestPropos" />
    <Greeting isLogined={true} />
    <Toggle />
    <Mailbox unreadMessages={messgaes} />
    <ul>{listItems}</ul>
    <br />
    <br />
    <br />
    <NameForm />  <br /> <br />
    <EasyForm /> <br /> <br />
    <FlavorForm />  <br /> <br />
    <br /> <br />
    <LoginControl />
    <br /> <br />
    <Reservation />

    <br /> <br />
    <Calculator />
    <br /> <br />

    <br /> <br />


    <h2>It is {new Date().toLocaleTimeString()}.</h2></div>

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
};


setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
