// 导入react
import React from 'react'
import ReactDOM from'react-dom'

import './index.css'

const songs = [
    {id:1,name:'byl'},
    {id:2,name:'qq'},
    {id:3,name:'yy'},
]

const list = (
    <ul>
        {songs.map((item,index) => <li className='title' key={item.id}>{ item.name }</li>)}
    </ul>
)
ReactDOM.render(list,document.getElementById('root'))