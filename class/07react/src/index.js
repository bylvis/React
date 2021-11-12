import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'
class App extends React.Component{
    state = {
        comments:[
            {id:1, name:'byl',comtent:'沙发'},
            {id:2, name:'yuyu',content:'二楼'},
            {id:3, name:'hzs',contend:'三楼'}
        ],
        userName:'',
        userContent:'',
    }
    addComment = () => {
        const {comments,userName,userContent} = this.state
        if(userName.length===0 || userContent.length===0) return alert('必须输入评论人和评论内容！')
        const newComment = [
            {
                id:Math.random(),
                name:userName,
                content:userContent
            },
            ...comments
        ]
        this.setState({comments:newComment,userName:'',userContent:''})
    }
    // 处理表单元素值
    handleForm = (e) => {
        const{ name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    // 抽离代码到方法里面
    renderList = () => {
        const {userName, userContent} = this.state
        return(
            <div className='box'>
                
                <div className="input-group">
                    <input onChange={this.handleForm} name='userName' type="text" className="form-control" id="exampleInputAmount" placeholder="评论人" value={userName}/>
                    <textarea onChange={this.handleForm} name='userContent' placeholder='请输入评论内容' id="input" className="form-control" rows="3" required="required" value={userContent}></textarea>
                    <button onClick={this.addComment} type="button" className="btn btn-default">Go!</button>
                </div>
                


                {/* 条件渲染 */}
                {
                    this.state.comments.length === 0 ?
                    (<div className='no-comment'>暂无评论！</div>)
                    :<div className='no-comment'>
                        <ul>
                            {this.state.comments.map(item => (
                                <li key={item.id}>
                                    <h3>评论人：{item.name}</h3>
                                    <p>内容：{item.content}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
                
            </div>
        )
    }

    render(){
        return(
            this.renderList()
        )
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))