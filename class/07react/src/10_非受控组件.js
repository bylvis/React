import React from "react";
import  ReactDOM  from "react-dom";

class App extends React.Component{
    constructor(){
        super()
        // 创建ref
        this.txtRef = React.createRef()
    }
    getTxt = () => {
        console.log('文本框值是:',this.txtRef.current.value);
    }
    render(){
        return(
            <span className="input-group-btn">
                <input ref={this.txtRef} type="text" className="form-control" id="exampleInputAmount" placeholder="Search"/>
                <button onClick={this.getTxt} type="button" className="btn btn-default">Go!</button>
            </span>
            
        )
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))