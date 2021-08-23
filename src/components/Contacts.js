import React, { Component } from 'react'

export default class Contacts extends Component {


    render() {
        const list = [1, 2, 3, 4, 5, 6];
        const listItems = list.map((item) => <li key={item}>{item}</li>)
        return (<div className="Contacts"><ul>{listItems}</ul></div>
        );
    }
}
