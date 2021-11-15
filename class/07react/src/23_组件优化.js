import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {
        count:0
    }
    // 推荐语法
    handleCount = () => {
        this.setState((state,props) => {
            return {
                count:state.count+1,
            }
        },console.log(1))
    }
    // 会直接避免组件重新渲染
    shouldComponentUpdate(nextProps,nextState){
        // 更新前后状态
        console.log('最新的state：',nextState);
        console.log('this.state:',this.state);
        // return false
        return true
    }
    render() {
        return (
            <div>
                我是VDOM{this.state.count}
                <button onClick={this.handleCount}>+1</button>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'))