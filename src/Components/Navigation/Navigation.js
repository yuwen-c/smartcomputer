import React from 'react';
// import './Navigation.css';

const Navigation = ({isSignedIn, onRouteChange}) => {
    //console.log(PisSignedIn) //false
    //console.log({PisSignedIn}) //{PisSignedIn: false}
    
    // isSignedIn true: home page, sign out
    if(isSignedIn){
        return(
            <div className="flex justify-end">
                <p // connect to sign in page
                onClick={() => onRouteChange('signIn')}
                className="naviClass w-10 pa2 ma2 f4 underline pointer">Sign Out</p>
            </div>
        )
    }

    // isSignedIn false: Sign in page, sign in, register
    else{
        return(
            <div className="flex justify-end">
                <p  
                onClick={() => onRouteChange('signIn')}
                className="naviClass w-10 pa2 ma2 f4 underline pointer grow">Sign In</p>
                <p 
                onClick={() => onRouteChange('register')}
                className="naviClass w-10 pa2 ma2 f4 underline pointer grow">Register</p>
            </div>
        )
    }

}

export default Navigation;