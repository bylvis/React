// 导入react
import React from 'react'
import ReactDOM from'react-dom'

// 创建react元素
// const title = React.createElement('h1',null,'hello react')
// const test = <h1>我是jsx</h1>
const isLoading = true

// if - else
const loadData = () =>{
  if(isLoading){
    return <div>loading....</div>
  }
  return <div>loading finish!</div>
}
const title = (
  <h1>
    条件渲染
    { loadData() }
  </h1>
)

// 三元表达式
const loadData1 = () => {
  return isLoading ? (<div>load....</div>) : (<div>load finished!</div>)
}
const title1 = (
  <h1>
      { loadData1() }
  </h1>
)
// 逻辑与
const loadData2 = () =>{
  return isLoading && (<div>loading....</div>)
}
const title3 = (
  <h1>
      { loadData2() }
  </h1>
)
ReactDOM.render(title3,document.getElementById('root'))