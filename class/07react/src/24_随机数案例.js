import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {
        count:0
    }
    handleClick = () => {
        this.setState(() => {
            return {
                count:Math.floor(Math.random()*3)
            }
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('最新状态：',nextState,' 当前状态:',this.state);
        // if(nextState.count === this.state.count){
        //     return false
        // }
        // return true
        return nextState.count !== this.state.count
    }
    render() {
        console.log('render');
        return (
            <div>
                我是随机数：{this.state.count}
                <button onClick={this.handleClick}>随机生成</button>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'))