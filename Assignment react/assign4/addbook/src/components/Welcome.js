import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Welcome = () => {
    const location=useLocation();
  return (
    <div className="container my-3">
        <h3>Welcome to world of library</h3>

        <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>Title : {location.state.title}</Card.Title>
                <Card.Text>Author : {location.state.author}</Card.Text>
                <Button variant="primary">Summary</Button>
            </Card.Body>
        </Card>
    </div>
    
  )
}

export default Welcome