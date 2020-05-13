import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Logo from './Logo';
import UserLogIn from './UserLogIn';
import ImgLinkForm from './ImgLinkForm';
import FaceRecognition from './FaceRecognition';

class App extends Component{

  render(){
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <UserLogIn/>
        <ImgLinkForm/>
        <FaceRecognition/>
      </div>
    )
  }
}


export default App;
