import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Form, Input, Label  , FormGroup , Button} from 'reactstrap'

const UpdateStatus = () => {
    const location = useLocation()
    const navigate=useNavigate()
    const [defec , setDefec]=useState({})
    
    useEffect(()=>{
        setDefec(location.state.defec)
    },[])
    
    const changeHandler=(e)=>{
        setDefec({...defec , [e.target.name]:e.target.value})
    }

    const clickHandler=async()=>{
        const requestOptions={
            'method':'PUT',
            'body':JSON.stringify({
                description:defec.description, priority:defec.priority, category:defec.category,stats:defec.stats
             }),
             'headers':{"Content-type":"application/json"}
        }
        const data=await fetch(`http://localhost:5000/defect/${defec.id}`, requestOptions)
        const response =await data.json();
        console.log(response)
        navigate("/admin")
    }
  return (
    <Container>
            <Form>
            <FormGroup>
                <Label for="category">Defect Category</Label>
                <Input id="category" name="category" type="select" value={defec.category} onChange={changeHandler}>
                    <option>Select</option>
                    <option>UI</option>
                    <option>Functional</option>
                    <option>Change Request</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                id="description"
                name="description"
                placeholder="description placeholder"
                type="text"
                value={defec.description}
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
                value={defec.priority}
                onChange={changeHandler}
                />
            </FormGroup>
            <FormGroup>
                <Label for="stats">Status</Label>
                <Input
                id="stats"
                name="stats"
                placeholder="priority placeholder"
                type="text"
                value={defec.stats}
                onChange={changeHandler}
                />
            </FormGroup>
            <Button color="success" onClick={clickHandler}>Submit</Button>
            </Form>
        </Container>
  )
}

export default UpdateStatus