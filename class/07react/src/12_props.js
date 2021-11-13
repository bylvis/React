import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
    this.props.fn()
        return (
            <div>
                我是{this.props.name}
            </div>
        )
    }
}
const Fun = (props) => {
    props.fn()
    console.log('props:',props);
    return(
        <div>my name is {props.name}{props.tag}</div>
    )
}
// ReactDOM.render(<App name='byl' fn ={()=>{console.log('这是一个函数');}}></App>, document.getElementById('root'))
ReactDOM.render(<Fun name='mmm' fn ={()=>{console.log('这是一个函数');}} tag={<p>这是一个P标签</p>}></Fun>, document.getElementById('root'))