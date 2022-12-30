import React, { useEffect, useState } from 'react'
import { Container, Table  , Button} from 'reactstrap'
import Card from 'react-bootstrap/Card';

const ViewAll = () => {
    const [todos, setTodos]=useState([])
    const fetchTodos = async () => {
        const data = await fetch("http://localhost:5000/books")
        const parsedData = await data.json()
        setTodos(parsedData)
    }
    useEffect(() => {
        fetchTodos()
    }, [])
  return (
    <Container>

        <div className="container my-3">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {todos.map((todo) => {
                        return (
                            <Card.Title>{todo.title}</Card.Title>
                            
                            
                            
                        )
                    })}
                
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>


            {/* <Table hover>
                <thead>
                    <th>Title</th>
                    <th>Author</th>
                    
                </thead>
                <tbody>
                {todos.map((todo) => {
                    return <tr>
                        <td>{todo.title}</td>
                        <td>{todo.author}</td>
                        
                    </tr>
                })}
                </tbody>
                
            </Table> */}
            
    </Container>
  )
}

export default ViewAll