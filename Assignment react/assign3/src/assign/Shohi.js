import React, { useState } from 'react'

function Shohi(){
    const[show,setShow]=useState(false);
  return (
    <div className='container my-3 mx-3'>
        
        <button onClick={()=>setShow(true)}>Show</button>
        {
            show?<h1>Hello React</h1>:null
        }
        <button onClick={()=>setShow(false)}>Hide</button>
    </div>
  )
}

export default Shohi