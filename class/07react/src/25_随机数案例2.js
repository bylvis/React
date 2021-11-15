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
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('最新状态：',nextState,' 当前状态:',this.state);
    //     // if(nextState.count === this.state.count){
    //     //     return false
    //     // }
    //     // return true
    //     return nextState.count !== this.state.count
    // }
    render() {
        // console.log('render');
        return (
            <div>
                <NumberBox number={this.state.count}></NumberBox>
                <button onClick={this.handleClick}>随机生成</button>
            </div>
        )
    }
}
class NumberBox extends React.Component{
    shouldComponentUpdate(nextProps,nextState){
        console.log('最新props：',nextProps.number,' 当前props:',this.props.number);
        return nextProps.number !== this.props.count
    }
    render(){
        console.log('子render');
        return(
            <h1>我是随机数:{this.props.number}</h1>
        )
    }
}
ReactDOM.render(<App></App>, document.getElementById('root'))