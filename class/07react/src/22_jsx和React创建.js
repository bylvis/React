import React from "react";
import ReactDOM from "react-dom";

// const element = <h1 className='red'>Hello jsx</h1>

const element = React.createElement(
    'h1',
    {
        className:'red'
    },
    'Hello jsX'
)

console.log(element);
ReactDOM.render(element, document.getElementById('root'))