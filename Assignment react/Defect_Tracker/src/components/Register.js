import React, { useState } from 'react'
import {Form , FormGroup , Label , Input , Button}  from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate()
    const[user,setUser]=useState({username:'',password:''})
    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const clickHandler=async()=>{
        alert('User Registered successfully');
        const requestOptions={
            'method':'POST',
            'body':JSON.stringify({
                username:user.username, password:user.password
             }),
             'headers':{"Content-type":"application/json"}
        }
        const data=await fetch("http://localhost:5000/users", requestOptions)
        const response =await data.json();
        console.log(response)
        navigate("/login")
    }
  return (
    <div className="container">
        <h1>Register User</h1>
        <Form>
            <FormGroup>  
                <Label for="username">Name</Label>
                <Input
                    id="username"
                    name="username"
                    placeholder="email"
                    type="text"
                    value={user.username}
                    onChange={changeHandler}
                />
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={user.password}
                    onChange={changeHandler}
                />
            </FormGroup>
            <Button  color="primary" onClick={(e)=>{clickHandler(e)}}>Register</Button>
        </Form>
    </div>
  )
}

export default Register