import React from "react";
import ReactDOM from "react-dom";
import img from './images/bomb.png'
// 指定一个函数  函数参数
function withMouse(WarppedComponent){
    // 在函数内部创建类
    class Mouse extends React.Component{
        state = {
            x:0,
            y:0
        }
        handleMouse = e => {
            this.setState({
                x:e.clientX,
                y:e.clientY
            })
        }
        componentDidMount(){
            window.addEventListener('mousemove',this.handleMouse)
        }
        componentWillUnmount(){
            window.removeEventListener('mousemove',this.handleMouse)
        }
        // 在render中返回参数 代表给 参数组件 赋予state 以及钩子函数添加的事件
        render(){
            return <WarppedComponent {...this.state} {...this.props}></WarppedComponent>
        }
    }
    // 设置displayName
    Mouse.displayName = `WithMouse${getDisplayName(WarppedComponent)}`
    // 返回类组件
    return Mouse
}
function getDisplayName(WarppedComponent){
    return WarppedComponent.displayName || WarppedComponent.name || 'Component'
}
// 测试高阶组件
const Cat = props => (
    <img src={img} style={{
        position:"absolute",
        top:props.y,
        left:props.x
    }}>

    </img>
)
const positionText = props => (
    <div>
        <h1>高阶组件</h1>
        <p>X:{ props.x },Y:{ props.y }</p>
    </div>
)
// 接收增强后的组件  
const CatPosition = withMouse(Cat)
const PositonText = withMouse(positionText)
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>高级组件</h1>
                <PositonText a='1'></PositonText>
                <CatPosition></CatPosition>
            </div>
        )
    }
}
ReactDOM.render(<App></App>, document.getElementById('root'))