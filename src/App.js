import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import UserLogIn from './Components/UserLogin/UserLogIn';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import { Background } from 'tsparticles/dist/Options/Classes/Background/Background';

const particlesSetting = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 400
      }
    },
    lineLinked: {
      color: {
        value: "#B0AAA8" 
      },
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
}

class App extends Component{

  render(){
    return (
      <div className="App">
        <Particles className='particlesClass'
        params={particlesSetting}
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
