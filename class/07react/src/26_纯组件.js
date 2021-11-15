import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = {
        obj:{
            number:0
        },
        list:[

        ]
    }
    handleClick = () => {
        // 创建新对象
        const newObj = {...this.state.obj,number:Math.floor(Math.random()*3)}
        this.setState(()=>{
            return{
                obj:newObj
            }
        })
        this.setState({
            list:[...this.state.list]
        })
    }

    render() {
        return (
            <div>
                <NumberBox number={this.state.obj.number}></NumberBox>
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