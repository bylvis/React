import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {
        count:0
    }
    // 提供修改状态的方法
    onIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <Child1 count = {this.state.count}></Child1>
                <Child2 onIncrement={this.onIncrement}></Child2>    
            </div>
        )
    }
}

const Child1 = (props) => {
    return <h1>计数器:{props.count}</h1>
}

const Child2 = (props) => {
    return <button onClick={() => props.onIncrement()} type="button" className="btn btn-default">+1</button>   
}
ReactDOM.render(<App></App>, document.getElementById('root'))