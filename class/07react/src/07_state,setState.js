import React from "react";
import  ReactDOM  from "react-dom";

class VDOM extends React.Component{
    constructor(){
        super()
        // this.Add() = this.Add.bind(this)
        //初始化state
        this.state = {
            count: 0
        }
    }
    // Add = () =>{
    //     // 这个this没处理的话是undifined
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }
    Add(){
        // 这个this没处理的话是undifined
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>+1</button>
                <button onClick={this.Add.bind(this)}>+1</button>
                <button onClick={()=>this.Add()}>+1</button>
            </div>
        )
    }
}

ReactDOM.render(<VDOM></VDOM>,document.getElementById('root'))