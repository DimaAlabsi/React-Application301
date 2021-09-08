import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { Card } from 'react-bootstrap';

 class SelectedBeast extends Component {
   
    
    render() {
        console.log(this.props);
        return (
        
                 <Modal  show={this.props.showMd} onHide={this.props.handleClose}>
       {/* <Button variant="primary" onClick={this.props.handleOpen}>
          modal
      </Button> */}
{/* 
      <Modal show={this.props.showMd} 
       onHide={this.props.handleClose
       > */}
        <Modal.Header closeButton>
          <Modal.Title>
              
              {this.props.title}</Modal.Title>
        </Modal.Header>
   <Modal.Body>            
        {/* {this.props.keyword}  */}

 {this.props.description} 
  <Card.Img style={{width:'300px'}} variant="top" alt={this.props.title} src={this.props.image_url} 
  />
   </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={this.props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
         )
    }
}

export default SelectedBeast

