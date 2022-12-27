import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form , FormGroup , Label , Input , Button}  from 'reactstrap'

const AddBook = () => {
    const navigate=useNavigate()
    const[user,setUser]=useState({title:'',author:''})

    const clickHandler=()=>{
        navigate("/welcome",{state:{title:user.title, author:user.author}})
    }

    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
        <Form>
            <FormGroup>
                <Label for="exampleTitle">Title</Label>
                <Input
                id="exampleTitle"
                name="title"
                placeholder="with a placeholder"
                type="text"
                value={user.title}
                onChange={changeHandler}
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleAuthor">Author</Label>
                <Input
                id="exampleAuthor"
                name="author"
                placeholder="password placeholder"
                type="text"
                value={user.author}
                onChange={changeHandler}
                />
            </FormGroup>
            
            <Button color='primary' onClick={()=>{clickHandler()}}>Add Book</Button>
        </Form>
    </div>
  )
}

export default AddBook