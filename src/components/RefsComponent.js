import React, { Component } from 'react'


const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">{props.children}</button>
));
export default class RefsComponent extends Component {
    render() {
        const ref = React.createRef();
        return (
            <div>
                <FancyButton ref={ref}>Click me!</FancyButton>;
            </div>
        )
    }
}
/**
 *  1.使用React.createRef()创建了ref
 *  2.通过FancyButton ref属性将创建的ref传递
 *  3.传递的ref在forwardRef的函数作为参数
 *  4. ref转发给button 指定为JSX属性
 *  5.当ref挂在完成 ref.current 将直相<button> DOM 节点</button>
 */
