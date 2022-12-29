import React, { useState } from 'react'
import {Form , FormGroup , Label , Input , Button}  from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate=useNavigate()
    const[user,setUser]=useState({description:'',priority:'',category:''})

    // const clickHandler=(e)=>{
    //     e.preventDefault();
    //     console.log("The submit button has been clicked");
    //     console.log('name is '+user.username+ 'password is '+user.password)
    // }
    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const clickHandler=async()=>{
        alert('Data Added successfully');
        const requestOptions={
            'method':'POST',
            'body':JSON.stringify({
                description:user.description, priority:user.priority, category:user.category,stats:true
             }),
             'headers':{"Content-type":"application/json"}
        }
        const data=await fetch("http://localhost:5000/defect", requestOptions)
        const response =await data.json();
        console.log(response)
        navigate("/tracker")
    }

  return (
    <div className='container my-3 mx-3'>
        <Form>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                id="description"
                name="description"
                placeholder="description placeholder"
                type="text"
                value={user.description}
                onChange={changeHandler}
                />
            </FormGroup>
            <FormGroup>
                <Label for="priority">Priority</Label>
                <Input
                id="priority"
                name="priority"
                placeholder="priority placeholder"
                type="text"
                value={user.priority}
                onChange={changeHandler}
                />
            </FormGroup>
            <FormGroup>
                <Label for="category">Defect Category</Label>
                <Input id="category" name="category" type="select" value={user.category} onChange={changeHandler}>
                    <option>Select</option>
                    <option>UI</option>
                    <option>Functional</option>
                    <option>Change Request</option>
                </Input>
            </FormGroup>
            <Button  color="primary" onClick={(e)=>{clickHandler(e)} }>Add Defect</Button>
        </Form>
    </div>
  )
}

export default User