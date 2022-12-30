import React, { useEffect, useState } from 'react'
import {Form, FormGroup, Input, Button, Table, Container, Card, CardBody} from 'reactstrap';
import { MdDelete } from 'react-icons/md'


const Task = () => {
  const [tasks, setTasks] = useState([])
  const [isChecked, setIsChecked]=useState(false)
 
  const onchangeHandler = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value })
  }
  const clickHandler = async () => {
    const requestOptions = {
      'method': 'POST',
      'body': JSON.stringify({
        task: tasks.task
      }),
      'headers': { "Content-type": "application/json" }
    }
    const data = await fetch(`http://localhost:5000/tasks`, requestOptions)
    const response = await data.json()
  }
  const [task, setTask] = useState([])
  
  const fetchHandler = async () => {
    const data = await fetch("http://localhost:5000/tasks")
    const parsedData = await data.json()
    setTask(parsedData)
  }
  
  const deleteHandler=async(id)=>{
    const data=await fetch(`http://localhost:5000/tasks/${id}`,{method:'delete'})
    const response= await data.json();
    fetchHandler();
  }
  useEffect(() => {
    fetchHandler()
  }, [])

  return (
    <div className='container mx-2 my-3' style={{ width: '50%' }}>
      <Form className='d-flex'>
        <FormGroup >
          <Input type="text" name="task" id="task" value={tasks.task}
            onChange={onchangeHandler} placeholder="Enter task" />
        </FormGroup>
        <Button onClick={clickHandler}>Add</Button>
      </Form>
      <Container>
        <Card>
          <CardBody>
            <Table> 
              <thead>
                <tr>
                  <th>
                    Todo List
                  </th>
                </tr>
              </thead>
              <tbody>
                {task.map((task) => {
                  return <tr>
                    <td style={{textDecoration:isChecked?'line-through':'none'}} ><input type="checkbox" name={task.task} id={task.id} value={true} onChange={()=>setIsChecked(!isChecked)}/>{task.task}&nbsp;</td>
                   <td><input type="checkbox" name={task.task} id={task.id} value={true}/></td>
                    <td><Button onClick={()=>deleteHandler(task.id)}><MdDelete></MdDelete></Button></td>
                  </tr>
                })}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>

    </div>


  )
}

export default Task