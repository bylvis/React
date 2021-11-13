import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props){
        super(props)
        console.log('生命周期钩子函数：constructor')
        this.state = {
            count:0
        }
    }
    // 组件渲染完成
    componentDidMount(){
        const title = document.getElementById('title')
        console.log(title);
        console.log('生命周期钩子函数：componentDidMount');
    }
    // 处理点击事件函数
    handleClick = () => {
        this.setState({
            count:this.state.count+1
        })
        // 强制更新 render 渲染
        // this.forceUpdate()
    }
    // 组件开始渲染
    render() {
        console.log('生命周期钩子函数：App render');
        return(
            <div>
                {this.state.count >3
                ?<p>豆豆已经死了！</p>
                :<Counter count={this.state.count}></Counter>}
                <button onClick={this.handleClick} type="button" className="btn btn-default">button</button>
            </div>
        )
    }
}
class Counter extends React.Component{
    // 组件更新
    componentDidUpdate(prevProps){
        console.log('上一次的props',prevProps,'，当前的props',this.props);
        console.log('生命周期钩子函数：componentDidUpdate');
        // 通过比较上一次和这一次的props是否相同 可以决定是否重新渲染组件
        if(prevProps.count !== this.props.count){
            // 这次setState会 再次渲染 所以会输出两次结果
            this.setState({count:this.props.count})
            // 发送ajax
        }
    }
    // 组件渲染完成
    componentDidMount(){
        this.timerID = setInterval(()=>{
            console.log('定时打印');
        },500)
    }
    // 组件销毁
    componentWillUnmount(){
        console.log('我没了componentWillUnmount触发！');
        // 清理定时器
        clearInterval(this.timerID)
    }
    // 组件开始渲染
    render(){
        console.log('生命周期钩子函数：子组件 render');
        return (
            <div>
                <h1 id='title'>按钮点击次数：{ this.props.count }</h1>
            </div>
        )
    }
}
ReactDOM.render(<App></App>, document.getElementById('root'))