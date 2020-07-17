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


const initialState = {
  input : '',
  imgUrl : '',
  // add imgurl state so that the image shows after click the button
  // if use input state instead, image shows right after input url
  faceRegion:{},
  faceRegions : [], //multiple faces,
  route: 'signIn', // 'home', 'register', 'signIn' 
  isSignedIn: false, 
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
    this.state = initialState;
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
    if(this.state.input){ //如果有input url才能點送出
      this.setState({imgUrl : this.state.input}); // setState to show image on page
      fetch('http://localhost:3000/imageUrl',{ // fetch with url to clarifai API
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data){
          // call grabFaceFun & pass region data
            this.grabFaceFun(data);
            // do increment of entries
            fetch('http://localhost:3000/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(this.state.user)
            })
            .then(response =>response.json())
            .then(count => this.setState(Object.assign(this.state.user, {entries: count}))) 
            .catch(console.log);
            this.setState({input : ""});   // set input to blank
          }      
      })
      .catch(console.log);
    }
  }

    
      // this.setState({users:{ entries: data }})
      // will setState the whole user object, so we lose user name in the screen.

      // another way to setState
      // this.setState(prevState => {
      //   let user = Object.assign({}, prevState.user);  // creating copy of state variable user
      //   user.entries = 'new count';                     // update the entries property, assign a new value                 
      //   return { user };                                 // return new object user object
      // })
  //   }) 


  grabFaceFun = (data) => {
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
      // this.setState({isSignedIn: false})
      // refresh the initialState when user sign out
      this.setState(initialState)
    }
    this.setState({route: route})
  }

  // load user data to main page.
  loadUserFromServer = (user) => {
    this.setState({user: user}); 
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
            PUser={this.state.user}
            Pentries={this.state.user.entries}/>
            <ImgLinkForm 
            PinputValue={this.state.input}
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
            <div>  
              <Logo/>  
              <SignIn 
              Proute={route} // send route through props
              PonRouteChange={this.onRouteChange}
              PloadUserFromServer={this.loadUserFromServer}/>
            </div>
            : 
            <div>  
              <Logo/> 
              <Register 
              Proute={route} // send route through props
              PonRouteChange={this.onRouteChange}
              PloadUserFromServer={this.loadUserFromServer}/>
            </div>
        }
      </div>
    )
  }
}


export default App;

