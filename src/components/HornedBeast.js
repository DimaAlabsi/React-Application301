import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
           likes: 0
        };
    }
    numOfFav = ()=>{
    this.setState({
        likes : this.state.likes + 1
    })
}
   
    render() {
        return (
            <>
            
  
            <Col>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={this.props.image_url} onClick={this.numOfFav} alt={this.props.keyword} width='300px' height='300px'  />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description} 
    <p> Horns= {this.props.horns}</p>
    </Card.Text>
    <Button variant="danger"  size="sm" onClick={this.numOfFav}> <p> Vote </p> <p> {this.state.likes}</p>  </Button> 
  </Card.Body>
</Card>

                      
</Col >
</>  
    )
   
        }
        }
    

export default HornedBeast
