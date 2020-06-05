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
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
//const Clarifai = require('clarifai');


const app = new Clarifai.App({apiKey: '39549cfbc39a4a6d8c78bd943cd62036'});

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : '',
      imgUrl : '',
      // add imgurl state so that the image shows after click the button
      // if use input state instead, image shows right after input url
      faceRegion:{},
      faceRegions : [], //multiple faces,
      route: 'signIn', // 'home', 'register', 'signIn' 
      isSignedIn: false, 
      user:{
        id:'',
        name:'',
        email:'',
        password:'',
        entries:'',
        date:''
      }
    }
  }

  // detect user input
  onInputChange = (event) => {
      this.setState({input: event.target.value})
  }
  // user click to send an url:
  // 1. show image on the screen
  // 2. send fetch to clarifai to do face detection
  // 3. another fetch to increase the entries of user, and get the current entries back.
  onImageClick = () => {
    this.setState({imgUrl : this.state.input});
    //face_detect_Model from Clarifai
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => {      
      // call grabFaceFun & pass region data
      this.grabFaceFun(response);
    }) 
    .catch(err => {
      console.log(err);
    });
    fetch('http://localhost:3000/put/125', {
      method: 'put',
      headers: {'Contend-Type': 'application/json'},
    }).then(response => response.json())
    .then(data => 
      // this.setState({entries: data})  // 無法寫user.entries在setstate裡面
      console.log(this.state.user.entries)
      );

  }

  grabFaceFun = (data) => {
    console.log('grabFaceFun')
    //multiple faces:
    const regionDatas = data.outputs[0].data.regions.map(item => {
      return item.region_info.bounding_box;
    })
    // console.log("grabFaceFun-regionDatas", regionDatas); //[{},{},{}]
    
    // step 1: grad the first face only
    // const regionData = data.outputs[0].data.regions[0].region_info.bounding_box;

    const imgEle = document.getElementById("imgID"); //get the url image
    const imgHeight = imgEle.height; //height of image
    const imgWidth = imgEle.width; //width of image
    
    // get four sides of face regions then set to faceRegions state
    const regionArr = regionDatas.map((item, index) => {
      return {
        top: imgHeight* item.top_row,
        bottom: imgHeight- (item.bottom_row* imgHeight),
        left: imgWidth* item.left_col,
        right: imgWidth- (item.right_col* imgWidth)
      }
    })
    this.setState({faceRegions: regionArr});   
// one person version, faceRegion is an object with one set of number
    // this.setState({faceRegion: {
    //   top: imgHeight* regionData.top_row,
    //   bottom: imgHeight- (regionData.bottom_row* imgHeight),
    //   left: imgWidth* regionData.left_col,
    //   right: imgWidth- (regionData.right_col* imgWidth)
    // }})
  }  

  onRouteChange = (route) => {
    if(route === 'home'){
      this.setState({isSignedIn: true})
    } 
    else if(route === 'signIn'){
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }

  // after regieter, load user data to main page.
  loadUserFromServer = (user) => {
    this.setState({user: user}); //ok
  } 

  render(){
    const {isSignedIn, route, imgUrl, faceRegions} = this.state;
    return (
      <div className="App">
        <Particles className='particlesClass'
        params={ParticlesSetting}
        />
        <Navigation
        PisSignedIn={isSignedIn}
        PonRouteChange={this.onRouteChange}/>
        {/* 3 conditions of route state decide to show what page */}
        {
          route === 'home' 
          ? 
          <div>
            <Logo/>
            <UserLogIn
            PUser={this.state.user}/>
            <ImgLinkForm 
            PonInputChange={this.onInputChange} 
            PonImageClick={this.onImageClick} />
            <FaceRecognition
            Pimg={imgUrl}
            // PfaceRegion={this.state.faceRegion} // single face version
            PfaceRegions={faceRegions}/>
          </div>
          : 
            route === 'signIn' 
            ?         
            <SignIn 
            PonRouteChange={this.onRouteChange}
            PloadUserFromServer={this.loadUserFromServer}/>
            : 
            <Register 
            PonRouteChange={this.onRouteChange}
            PloadUserFromServer={this.loadUserFromServer}/>
        }
      </div>
    )
  }
}


export default App;
