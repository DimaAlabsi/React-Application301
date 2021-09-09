import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import  FormFilter from   './components/FormFilter';
import Data from './assests/data.json';


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
      keyword:"",
      Data: Data,

     }}
   
   handleClose =()=>{
    this.setState({

      showMd:false
    })
  }
  handleOpen=(image_url,title,keyword,description)=>{
    this.setState({
  keyword: keyword,
      showMd: true,
      title: title,
      description: description,
      image_url: image_url,


  });
}
// 
HandleChange=(e)=>{
  let selection =parseInt(e.target.value);
  let filteredData=[];

  if (selection===0){

      
          filteredData=Data
          
      }
      else{filteredData=Data.filter(i=>{
          return i.horns === selection}
      
      )}

  

  this.setState({
      Data: filteredData,
  })
  console.log(this.state.Data)
}



  render() {
    return (
    <>
    <Header/>
    <FormFilter   HandleChange={this.HandleChange}/>
    <Main  handleOpen={this.handleOpen} Data={this.state.Data}/>
    
    <SelectedBeast  title={this.state.title}
     description={this.state.description}
    image_url={this.state.image_url} 
     showMd={this.state.showMd} 
     handleClose={this.handleClose}
        keyword={this.state.keyword}/>
        <Footer/>
        </>
        

      )
  }

 }
export default App

