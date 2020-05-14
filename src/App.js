import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import UserLogIn from './Components/UserLogin/UserLogIn';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import {ParticlesSetting} from './Components/ParticlesSetting';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : ''
    }
  }

  render(){
    return (
      <div className="App">
        <Particles className='particlesClass'
        params={ParticlesSetting}
        />
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
