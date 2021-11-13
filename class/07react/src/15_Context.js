import React from "react";
import ReactDOM from "react-dom";

// 创建context得到两个组件
const {Provider, Consumer} = React.createContext()
class App extends React.Component {
    render() {
        return (
            <Provider value='pink'>
                <div className='app'>
                    <Node></Node>
                </div>
            </Provider>
        )
    }
}
const Node = props => {
    return(
        <div className='node'>
            <SubNode></SubNode>
        </div>
    )
}
const SubNode = props => {
    return(
        <div className='subnode'>
            <Children></Children>
        </div>
    )
}
const Children = props => {
    return(
        <div className='child'>
            <Consumer>
                {
                    data => <span>我是子节点--{data}</span>
                }
            </Consumer>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))