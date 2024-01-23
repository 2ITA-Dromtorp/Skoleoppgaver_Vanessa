import React, { useState } from 'react'
import '../App.css';


function Todolist() {
  return (
    <div className='content'>
    
    <div className='todo-input'>
      <input></input>
      <button>Submit</button>
    </div>
    <div className='todo-list'>
      <div>Todo1</div>
      <div>Todo2</div>
    </div>
    </div>

  )
}

export default Todolist;