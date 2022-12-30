import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ViewBook = () => {
    const [todos, setTodos]=useState([])
    const[show,setShow]=useState(false);

    const fetchTodos = async () => {
        const data = await fetch("http://localhost:5000/books")
        const parsedData = await data.json()
        setTodos(parsedData)
    }
    useEffect(() => {
        fetchTodos()
    }, [])

  return (
    <div>
        <h2>View all book</h2>
        <div className="container my-3 mx-3">
            <div className="row container-fluid">
                <Card style={{ width: '18rem' }}>
                    {todos.map((todo)=>{
                        return(
                            <Card.Body>
                                <Card.Title>{todo.title}</Card.Title>
                                <Card.Text>{todo.author}</Card.Text>
                                <Card.Text>
                                    {
                                        show?<>{todo.summary} <br/> {todo.id}</>:null
                                    }
                                </Card.Text>
                                <Button variant="primary" onClick={()=>setShow(!show)}>Summary</Button>
                            </Card.Body>
                        )
                    })}
                </Card>
            </div>
        </div>
    </div>
  )
}

export default ViewBook