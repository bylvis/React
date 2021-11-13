import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
class App extends React.Component {
    render() {
        return (
            <div>
                我是默认值：{this.props.pageSize}
            </div>
        )
    }
}
App.defaultProps = {
    pageSize:10
}
App.propTypes = {
    colors:PropTypes.array
}

ReactDOM.render(<App colors={['byl']} ></App>, document.getElementById('root'))