import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                我是VDOM
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'))