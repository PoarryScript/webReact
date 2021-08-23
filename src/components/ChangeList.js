import React, { Component, Fragment } from 'react'
import '../css/input.scss'

export default class ChangeList extends Component {

    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.addListData = this.addListData.bind(this);
        this.state = {
            inputValue: '',
            lists: ['test1', 'test2'],
        };
    }

    addListData() {
        this.setState({
            lists: [...this.state.lists, this.state.inputValue],
            inputValue: ''
        })
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }
    //删除列表项
    onDeleteItem(itemIndex) {
        let tempList = this.state.lists;
        tempList.splice(itemIndex, 1);
        this.setState({
            lists: tempList,
            inputValue: '',
        });
    }
    render() {
        return (
            <Fragment>
                {/* 注释 */}
                <input className="input" value={this.state.inputValue} onChange={this.inputChange} />
                <button className="subbutton" onClick={this.addListData}>添加数据</button>
                <ul>
                    {this.state.lists.map((items, index) =>
                        <li key={items + index}
                            onClick={this.onDeleteItem.bind(this, index)}
                        >{items}</li>
                    )}
                </ul>
            </Fragment>
        );
    }
}
