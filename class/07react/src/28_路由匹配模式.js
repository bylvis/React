import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class Login extends React.Component{
    handleLogin = () => {
        this.props.history.push('/home')
    }
    render(){
        return(
            <div>
                <p>登录页面</p>
                <button onClick={this.handleLogin}>登录</button>
            </div>
        )
    }
}

const Home = (props) => {
    const handleBack = () =>{
        props.history.go(-1)
    }
    return(
        <div>
            这是Home
            <br></br>
            <Link to='/login'>login页面</Link>
            <button onClick={handleBack} type="button" className="btn btn-default">返回</button>
        </div>
    )
}
class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <h1>路由</h1>
                    {/* <Link to='/login'>去登陆</Link> */}
                    
                    <Route path='/' exact component={Login}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/home' component={Home}></Route>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App></App>, document.getElementById('root'))