import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './assests/data.json';
import SelectedBeast from './components/SelectedBeast';


// import Header from './Header';


// import Main from './Main';
// import Footer from './Footer';

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       showMd : false,
       title : "",
       description :"",
       image_url: "",


     }
   }
   handleClose =()=>{
    this.setState({

      showMd:false
    })
  }
  handleOpen=(title,description,image_url)=>{
    this.setState({

      showMd: true,
      title: title,
      description: description,
      image_url: image_url,


  });
}
  render() {
    return (
    <>
    <Header/>
    <Main  handleOpen={this.handleOpen}/>
    <Footer/>
    <SelectedBeast  title={this.state.title} description={this.state.description}
    image_url={this.state.image_url}  showMd={this.state.showMd} handleClose={this.state.handleClose} />
    </>
      )
  }
}

export default App

