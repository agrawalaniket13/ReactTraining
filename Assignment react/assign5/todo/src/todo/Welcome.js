import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Welcome = () => {
    const location=useLocation();
    const[message,setMessage]=useState()

    const clickHandler=async()=>{
        const data=await fetch("http://localhost:5000/messages")
        const pasredData= await data.json()
        var randNum =  Math.floor(Math.random() * 4) + 1;
        setMessage(pasredData[randNum].message)
    }


    // const clickHandler=()=>{
    //     const welcomeMessages=[
    //         {id:1, message:'you are doing good'},
    //         {id:2, message:'stand in front of the mirror to see your best friend'},
    //         {id:3, message:'today I leave beind all the past traumas'},
    //         {id:4, message:'I am in the best of my energy today'},
    //         {id:5, message:'I greet people with care and affection'},
    //     ]
    //     var randNum =  Math.floor(Math.random() * 4) + 1;
    //     setMessage(welcomeMessages[randNum].message)
    //     // setMessage("1234")
    // }


  return (
    <div>
        <h3>hello {location.state.name} your Login successful and password is {location.state.pass} welcome to you <Link to="/todos">Click here</Link> </h3>
        {/* <h3>And you are {location.state.message}</h3> */}
        <p style={{color:"red"}}>{message}</p>
        <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default Welcome