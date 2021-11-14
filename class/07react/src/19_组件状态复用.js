import React from "react";
import ReactDOM from "react-dom";
import img from './images/bomb.png'
import PropTypes from 'prop-types'
// 创建Mouse组件
class Mouse extends React.Component{
    // 鼠标位置state
    state = {
        x:0,
        y:0
    }
    // 鼠标移动事件的事件处理
    handleMouseMove = e => {
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    // 监听鼠标移动 在组件渲染好之后给window添加一个事件监听 一旦鼠标移动触发handleMouseMove
    componentDidMount(){
        window.addEventListener('mousemove',this.handleMouseMove)
    }
    render(){
        // 把它的state暴露在外面 外面的render1函数会接收到this.state 子传父
        // return this.props.render1(this.state)
        return this.props.children(this.state)
    }
}
Mouse.propTypes = {
    children:PropTypes.func.isRequired
}
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>render props模式</h1>
                {/* render 模式 */}
                {/* <Mouse render1={(mouse)=> <p>鼠标当前位置{mouse.x},{mouse.y}</p>}></Mouse> */}
                {/* render children模式 */}
                <Mouse>{mouse => {return (<p>鼠标当前位置{mouse.x},{mouse.y}</p>)}}</Mouse>
                {/* 猫捉老鼠 */}
                {/* <Mouse render1={mouse=>{
                    return <img src={img} alt='bomb' style={{
                        position:'absolute',
                        top:mouse.y,
                        left:mouse.x
                    }}></img>
                }}></Mouse> */}
                <Mouse>{mouse => {return (
                <img src={img} alt='bmob' 
                        style={{ 
                            position:'absolute',
                            top:mouse.y,
                            left:mouse.x
                        }}>
                </img>)}}</Mouse>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'))