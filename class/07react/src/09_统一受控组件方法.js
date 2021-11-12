import React from "react";
import  ReactDOM  from "react-dom";

class App extends React.Component{
    state = {
        txt:'input初始数据',
        content:'富文本框初始数据',
        city:'bg',
        isChecked:false,
    }
    handleChange = e => {
        const target = e.target
        const value = target.type === 'checkbox'
        ? target.checked
        : target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <div style={{width:200}}>
                {/* 文本框 */}
                <input name='txt' value={this.state.txt} onChange={ this.handleChange } type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"/>
                {/* 富文本框 */}
                <textarea name='content' value={this.state.content} onChange={ this.handleChange }  id="input" className="form-control" rows="3" required="required"></textarea>
                {/* 下拉菜单 */}
                <select name='city' value={this.state.city} onChange={ this.handleChange }  id="input" className="form-control" required="required">
                    <option value="bg">北京</option>
                    <option value="sh">上海</option>
                    <option value="gz">广州</option>
                </select>
                {/* 复选框 */}
                <input name='isChecked' type="checkbox" value={this.state.isChecked} onChange={ this.handleChange }/>checkbox
            </div>
        )
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))