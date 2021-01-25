import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import UserLogIn from '../Components/UserLogin/UserLogIn';
import ImgLinkForm from '../Components/ImgLinkForm/ImgLinkForm';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import {ParticlesSetting} from '../Components/ParticlesSetting';
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';
import ErrorMessage from '../Components/ErrorMessage/ErrorMesssage';
import Footer from '../Components/Footer/Footer';

const initialState = {
  input : '',
  imgUrl : '',
  // add imgurl state so that the image shows after click the button
  // if use input state instead, image shows right after input url
  faceRegion:{},
  faceRegions : [], //multiple faces,
  route: 'signIn', // 'home', 'register', 'signIn' 
  isSignedIn: false, 
  errMeg: "",
  user:{
    id: 0,
    name:'',
    email:'',
    password:'',
    entries:'',
    joined:''
  }
}

class App extends Component{
  constructor(){
    super();
    this.state = JSON.parse(JSON.stringify(initialState)); // pass by value
    // this.state = initialState; // pass by reference
  }

  // detect user input
  onInputChange = (event) => {
      this.setState({input: event.target.value})
  }

  // delete url
  onDeleteButton = () => {
    this.setState({input: ''})
  }

  // user click to send an url:
  // 1. show image on the screen
  // 2. send fetch to clarifai to do face detection
  // 3. another fetch to increase the entries of user, and get the current entries back.
  onImageClick = () => {
    if(this.state.input){ //如果有input url才能點送出
      this.setState({
        imgUrl : this.state.input,  // setState to show image on page
        faceRegions: [],        // clear blue face regions of last picture
        errMeg: ""   // reset error Message about none-face picture
      }); 
      fetch('https://immense-river-02070.herokuapp.com/imageUrl',{ // fetch with url to clarifai API
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data.outputs[0].data.regions){ // if there are faces
          // call grabFaceFun & pass region data
          this.grabFaceFun(data);
          // do increment of entries
          fetch('https://immense-river-02070.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.user)
          })
          .then(response =>response.json())
          .then(count => {
            // correct way to change property in nested state.
            this.setState(prevstate => {
              let user = Object.assign({}, prevstate.user);
              user.entries = count[0];
              return{user: user}
            })
          })
          .catch();           
        }
        else{
          this.setState({errMeg: "no face detected!!"});
        }
        this.setState({input : ""});   // set input to blank
      })
      .catch((error)=> {
        this.setState({errMeg: "detection failed!!"})
      });
    }
  }


  grabFaceFun = (data) => {
    const regionDatas = data.outputs[0].data.regions.map(item => {
      return item.region_info.bounding_box;
    })

    const imgEle = document.getElementById("imgID"); //get the url image
    const imgHeight = imgEle.height; //height of image
    const imgWidth = imgEle.width; //width of image
    
    const regionArr = regionDatas.map((item, index) => {
      return {
        top: imgHeight* item.top_row,
        bottom: imgHeight- (item.bottom_row* imgHeight),
        left: imgWidth* item.left_col,
        right: imgWidth- (item.right_col* imgWidth)
      }
    })
    this.setState({faceRegions: regionArr});   
  }  

  onRouteChange = (route) => {
    if(route === 'home'){
      this.setState({isSignedIn: true})
    } 
    else if(route === 'signIn'){
      this.setState(initialState)
    }
    this.setState({route: route})
  }

  
  // load user data to main page.
  loadUserFromServer = (data) => {
    this.setState({user: data});
  } 

  render(){
    const {isSignedIn, route, imgUrl, faceRegions} = this.state;
    return (
      <div className="App flex flex-column vh-100">
        <Particles className='particlesClass'
        params={ParticlesSetting}
        />
        <Navigation
        isSignedIn={isSignedIn}
        onRouteChange={this.onRouteChange}/>
        {/* 3 conditions of route state decide to show what page */}

          {
          route === 'home' 
          ?   
          <div>
            <Logo/>
            <UserLogIn
            user={this.state.user}
            entries={this.state.user.entries}/> {/*?*/}
            <ImgLinkForm 
            inputValue={this.state.input}
            onInputChange={this.onInputChange} 
            onDeleteButton={this.onDeleteButton}
            onImageClick={this.onImageClick} />
            <ErrorMessage
            errorMessage={this.state.errMeg} />
            <FaceRecognition
            img={imgUrl}
            // PfaceRegion={this.state.faceRegion} // single face version
            faceRegions={faceRegions}/>
          </div>
            : 
            route === 'signIn' 
            ?     
            <div>  
              <Logo/>  
              <SignIn 
              route={route} // send route through props
              onRouteChange={this.onRouteChange}
              loadUserFromServer={this.loadUserFromServer}/>
            </div>
            : 
            <div>  
              <Logo/> 
              <Register 
              route={route} // send route through props
              onRouteChange={this.onRouteChange}
              loadUserFromServer={this.loadUserFromServer}/>
            </div>
        } 
        <Footer/>
      </div>
    )
  }
}


export default App;

