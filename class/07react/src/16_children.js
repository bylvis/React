import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            
            <div>
                我是VDOM
                {this.props.children}
            </div>
        )
    } 
}
const Test = () => {
    return(
        <button>i am button</button>      
    )
}
ReactDOM.render(
    <App>
        <p>我是一个P</p>
        <Test></Test>
    </App>, document.getElementById('root'))