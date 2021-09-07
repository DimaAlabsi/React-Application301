import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
            <Container>
  <Row>
            <Col  xs={{ order: 'last' }}>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} onClick={this.numOfFav} alt={this.props.keyword}  />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button variant="primary" onClick={this.numOfFav}> <p> Vote </p></Button>
    <p> the number of “Likes”  {this.state.likes}</p>
  </Card.Body>
</Card>

                      
</Col >
</Row>
</Container>
</>  
    )
   
        }
        }
    

export default HornedBeast
