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

  // face detection url: 
  // https://samples.clarifai.com/face-det.jpg
  // {top_row: 0.30901453, left_col: 0.21245633, bottom_row: 0.47755477, right_col: 0.30410764}
  //   bottom_row: 0.47755477
  //   left_col: 0.21245633
  //   right_col: 0.30410764
  //   top_row: 0.30901453
  // 取得的bounding box裡面的數字，是%。

  grabFaceFun = (data) => {
    const regionData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imgEle = document.getElementById("imgID");
    const imgHeight = imgEle.height; //480 圖片長寬
    const imgWidth = imgEle.width; //720
    // get four sides of face region
    console.log(imgHeight* regionData.top_row,imgHeight* regionData.bottom_row,imgWidth* regionData.left_col,imgWidth* regionData.right_col)
    this.setState({faceRegion: {
      //數字越大，就離那一邊越遠
      top: imgHeight* regionData.top_row,
      bottom: imgHeight- (regionData.bottom_row* imgHeight),
      left: imgWidth* regionData.left_col,
      right: imgWidth- (regionData.right_col* imgWidth)
    }})


    // // size of the square
    // const squareHeight = bot - top;
    // const squareWidth = rig - lef;

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
        Pimg={this.state.imgUrl}
        PfaceRegion={this.state.faceRegion}/>
      </div>
    )
  }
}


export default App;
