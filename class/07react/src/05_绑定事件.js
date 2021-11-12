import React from "react";
import  ReactDOM  from "react-dom";


class App extends React.Component{
    handleClick(){
        console.log('事件触发');
    }
    render(){
        return(
        <button onClick={this.handleClick} className="btn btn-primary">点击类事件</button>
        )
    }
}
function App2(){
    function handleClick(){
        console.log('函数组件事件触发');
    }
    return(
        <button onClick={handleClick} className="btn btn-primary">点击函数事件</button>
    )
}
ReactDOM.render(<App></App>,document.getElementById('root'))
// ReactDOM.render(<App2></App2>,document.getElementById('root'))