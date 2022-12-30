import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ShowDetail = () => {
    const[show,setShow]=useState(false);
  return (
    <div>
        <h1>ShowDetail component called</h1>
        <div className="container my-3 mx-3">
            <div className="row container-fluid">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Google pixel 2 xl</Card.Title>
                        <Card.Text>Price: 62000</Card.Text>
                        <Card.Text>
                            {
                                show?<div><ul>
                                    <li>RAM: 4gb</li>
                                    <li>Camera: 12.2 MP</li>
                                    <li>OS: Android pie</li>
                                    <li>Processor: Snapdragon</li>
                                </ul></div>:null
                            }
                        </Card.Text>
                        <Button variant="primary" onClick={()=>setShow(!show)}>Show Details</Button>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    </div>
  )
}

export default ShowDetail