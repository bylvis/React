import React from "react";
import  ReactDOM  from "react-dom";

class App extends React.Component{
    handleClick(e){
        e.preventDefault()
        console.log('事件对象',e);
    }
    render(){
        return(
            <button onClick={this.handleClick}>点击</button>
        )
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))