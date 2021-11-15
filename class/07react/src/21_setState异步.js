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
        })
        this.setState((state,props) => {
            return {
                count:state.count+1,
            }
        },console.log(1))
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