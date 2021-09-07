import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



// import Header from './Header';


// import Main from './Main';
// import Footer from './Footer';

 class App extends Component {
  render() {
    return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
      )
  }
}

export default App

