import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import Col from 'react-bootstrap/Col';

 class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
           likes: 0,
       
        };
    }
    numOfFav = ()=>{
    this.setState({
        likes : this.state.likes + 1
    })
}

//     addFormButton=()=>{
//         this.setState({
//             form :this.state.form + 1,})
//            this.props.FormButton();
// this.props.selectForm(this.props.image_url,this.props.description,this.props.keyword,this.props.title);

//     } 
    

getOpenOne=()=>{
    let image_url = this.props.image_url ;
    let title=this.props.title;
    let keyword=this.props.keyword;
    let description = this.props.description ;
    // this.props(image_url,title,keyword,description)
    
    this.props.handleOpen(image_url,title,keyword,description) ;
}
   
    render() {
        return (
            <>
            
  
            <Col>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={this.props.image_url} onClick={this.getOpenOne} alt={this.props.keyword} width='300px' height='300px'  />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description} 
    <p> Horns= {this.props.horns}</p>
    </Card.Text>
    <Button variant="danger"  size="sm" onClick={this.numOfFav}> <span> Vote </span> <p> {this.state.likes}</p>  </Button> 

    <Button variant="outline-danger" size="sm" onClick={this.getOpenOne}> <p> Modal </p>  </Button> 


  </Card.Body>
</Card>

                      
</Col >
</>  
    )
   
        }
        }
    

export default HornedBeast
