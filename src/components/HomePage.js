import React, { Component } from 'react'

//为当前theme创建一个context 默认值为light
const ThemeContext = React.createContext('light');

export default class HomePage extends Component {
    render() {
        //使用Provider来将当前的theme传递给以下组件树，
        return (
            <ThemeContext.Provider value="dark">
                {/* <Toolbar theme="dark" /> */}
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

//不需要往下传递参数了
function Toolbar() {
    return (<div><ThemeButton /></div>)
}
/* function Toolbar(props) {
    //Toolbar接收额外的theme属性没传递给ThemeButton组件，这样层层传递比较麻烦
    //使用context避免通过中间元素传递参数props
    return (<div><ThemeButton theme={props.theme} /></div>)
} */

class ThemeButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        /*         return <button theme={this.props.theme} >Button </button>;
         */
        /* 读取参数的方式也变了 */

        return <button theme={this.contextType} >Button </button>;
    }
}