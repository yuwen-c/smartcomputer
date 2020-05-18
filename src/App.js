import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import UserLogIn from './Components/UserLogin/UserLogIn';
import ImgLinkForm from './Components/ImgLinkForm/ImgLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import {ParticlesSetting} from './Components/ParticlesSetting';
import Clarifai from 'clarifai';
//const Clarifai = require('clarifai');

const app = new Clarifai.App({apiKey: '39549cfbc39a4a6d8c78bd943cd62036'});

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : '',
      imgUrl : '',
// 如果只設input, 把圖片用this.state.input傳到畫面的component，會一輸入就出現，違反直覺
      faceRegion : {}
    }
  }
  // detect user input
  onInputChange = (event) => {
      this.setState({input: event.target.value})
  }
  
  // face detection url: https://samples.clarifai.com/face-det.jpg
  // detect user click submit button
  onButtonClick = () => {
    this.setState({imgUrl : this.state.input})
    // Predict the contents of an image by passing in a URL.
    //face_detect_Model
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => {
      // call grabFaceFun & pass region data
      this.grabFaceFun(response);
    }) //已取得人臉區域。但是要解決多張人臉問題。
    .catch(err => {
      console.log(err);
    });
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
        <ImgLinkForm 
        PonInputChange={this.onInputChange} 
        PonButtonClick={this.onButtonClick} />
        <FaceRecognition
        Pimg={this.state.imgUrl}/>
      </div>
    )
  }
}


export default App;
