import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { HashRouter as Router,Route,Link} from 'react-router-dom'
const First = () => (<p>页面一内容</p>)
const Home = () => <p>HOME</p>
const App = () => (
    <Router>
        <div>
            <h1>React前端路由</h1>
            {/* 指定路由入口 */}
            <Link to='/first'>页面一</Link>
            <Link to='/home'>home页面</Link>
            {/* 指定路由出口 */}
            <Route path='/first' component={ First }></Route>
            <Route path='/home' component={ Home }></Route>
        </div>
    </Router>
)

ReactDOM.render(<App></App>, document.getElementById('root'))