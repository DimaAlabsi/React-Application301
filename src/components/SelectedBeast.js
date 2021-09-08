import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


 class SelectedBeast extends Component {
   
    
    render() {
        
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
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
   <Modal.Body>{this.props.description} <img src={this.props.image_url} alt={this.props.keyword}> </img></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
         )
    }
}

export default SelectedBeast

