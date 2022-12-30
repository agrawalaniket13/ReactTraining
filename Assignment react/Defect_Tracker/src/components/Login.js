import React, { useState } from 'react'
import {Form , FormGroup , Label , Input , Button,Alert}  from 'reactstrap'
import { useNavigate, Link } from 'react-router-dom'

const Login = (props) => {

    const navigate=useNavigate()
    const[loginn,setLogin]=useState({username:'',password:''})

    const clickHandler=async()=>{
        const data = await fetch("http://localhost:5000/users");
        const response = await data.json()
        setLogin(response)
        response.map(res=>{
            if(loginn.username===res.username&loginn.username!='admin'&& loginn.password===res.password&loginn.password!='admin'){
                props.login(loginn.username)
                console.log("login valid")
                navigate("/tracker",{state:{name:loginn.username}})
            }
            else if(loginn.username=="admin"&&loginn.password=="admin"){
                console.log("admin")
                navigate("/admin",{state:{name:loginn.username}})
            }
            else{
            }
        })
    }
    
    
    // const clickHandler=()=>{
    //     if(loginn.username==='ani' && loginn.password==='ani123'){
    //         props.login(loginn.username)
    //         console.log('login valid')
    //         navigate("/admin")
    //     }
    //     else if(loginn.username==='aniket' && loginn.password==='aniket123'){
    //         console.log('login valid')
    //         navigate("/tracker")
    //     }
    //     else{
    //         alert("not valid user!!!!")
    //     }
    // }
    
    const changeHandler=(e)=>{
        setLogin({...loginn,[e.target.name]:e.target.value})
    }

  return (
    <div className="container">
        <h1>Login Page</h1>
        <Form>
            <FormGroup>  
                <Label for="username">Email</Label>
                <Input
                    id="username"
                    name="username"
                    placeholder="email"
                    type="text"
                    value={loginn.username}
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
                    value={loginn.password}
                    onChange={changeHandler}
                />
            </FormGroup>
            <Button  color="primary" onClick={clickHandler}>Login</Button>{'  '}
            <Button  color="primary"><Link to="/register" style={{color:"white"}}>Register User</Link></Button>
        </Form>
    </div>
  )
}

export default Login