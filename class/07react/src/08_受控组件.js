import React from "react";
import  ReactDOM  from "react-dom";

class App extends React.Component{
    state = {
        txt:'input初始数据',
        content:'富文本框初始数据',
        city:'bg',
        isChecked:false,
    }
    handleContent = e =>{
        this.setState(
            {content:e.target.value}
        )
    }
    handleCity = e=> {
        this.setState(
            {city:e.target.value}
        )
    }
    handleChecked = e => {
        this.setState(
            {isChecked:e.target.checked}
        )
    }
    render(){
        return(
            <div style={{width:200}}>
                {/* 文本框 */}
                <input value={this.state.txt} onChange={ e => this.setState({txt:e.target.value})} type="text" class="form-control" id="exampleInputAmount" placeholder="Amount"/>
                {/* 富文本框 */}
                <textarea value={this.state.content} onChange={this.handleContent} name="" id="input" class="form-control" rows="3" required="required"></textarea>
                {/* 下拉菜单 */}
                <select value={this.state.city} onChange={this.handleCity} name="" id="input" class="form-control" required="required">
                    <option value="bg">北京</option>
                    <option value="sh">上海</option>
                    <option value="gz">广州</option>
                </select>
                {/* 复选框 */}
                <input type="checkbox" value={this.state.isChecked} onChange={this.handleChecked}/>checkbox
            </div>
        )
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))