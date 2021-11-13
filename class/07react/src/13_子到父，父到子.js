import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = { name:'byl',parentMsg:''}
    getChildMsg = (msg) =>{
        console.log('接收到子组件数据！',msg);
        this.setState({parentMsg:msg})
    }
    render() {
        return (
            <div>
                我是父组件{this.state.parentMsg}
                <Child name={this.state.name} getMsg={this.getChildMsg}></Child>
            </div>
        )
    }
}
class Child extends React.Component{
    state={childMsg:'React'}
    handleClick = () => {
        this.props.getMsg(this.state.childMsg)
    }
    render(){
        return(
            <div>我是{this.props.name}
                
                <button onClick={this.handleClick} type="button" className="btn btn-default">button</button>
                
            </div>
        )
    }
}
ReactDOM.render(<App></App>, document.getElementById('root'))