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
      faceRegion:{},
      faceRegions : [ //multiple faces
        {
          smallRegion: {
            top: 1,
            bottom: 2,
            right: 3,
            left:4
          }
        },
        {
          smallRegion: {
            top: 1,
            bottom: 2,
            right: 3,
            left:4
          }
        }
      ]
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

  grabFaceFun = (data) => {
    //multiple faces:
    const regionDatas = data.outputs[0].data.regions.map(item => {
      return item.region_info.bounding_box;
    })
    console.log("grabFaceFun-regionDatas", regionDatas); //[{},{},{}]
    // [{top_row: 0.30901453, left_col: 0.21245633, bottom_row: 0.47755477, right_col: 0.30410764},
    // {},{}]
    // const regionData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imgEle = document.getElementById("imgID"); //get the url image
    const imgHeight = imgEle.height; //height of image
    const imgWidth = imgEle.width; //width of image
    // get four sides of face region
    //先拆解邊長，再setState
    // write an object
    const regionObject = {};
    regionDatas.forEach((item, index) => {
      regionObject[index] = {
        top: imgHeight* item.top_row,
        bottom: imgHeight- (item.bottom_row* imgHeight),
        left: imgWidth* item.left_col,
        right: imgWidth- (item.right_col* imgWidth)
      }
    })
    
    //好像還是把資料塞進array比較對？？
    this.setState({faceRegions: Object.values(regionObject)});
  //console.log("grabFaceFun-regionObject把多筆資料塞obj", regionObject);
// one person version, faceRegion is an object with one set of number
    // this.setState({faceRegion: {
    //   top: imgHeight* regionData.top_row,
    //   bottom: imgHeight- (regionData.bottom_row* imgHeight),
    //   left: imgWidth* regionData.left_col,
    //   right: imgWidth- (regionData.right_col* imgWidth)
    // }})
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
        // PfaceRegion={this.state.faceRegion}
        PfaceRegions={this.state.faceRegions}/>
      </div>
    )
  }
}


export default App;
