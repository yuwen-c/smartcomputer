import React from 'react';
// import './Navigation.css';

const Navigation = ({PisSignedIn, PonRouteChange}) => {
    //console.log(PisSignedIn) //false
    //console.log({PisSignedIn}) //{PisSignedIn: false}
    
    // isSignedIn true: home page, sign out
    if(PisSignedIn){
        return(
            <div className="flex justify-end">
                <p // connect to sign in page
                onClick={() => PonRouteChange('signIn')}
                className="naviClass w-10 pa2 ma2 f4 underline pointer">Sign Out</p>
            </div>
        )
    }

    // isSignedIn false: Sign in page, sign in, register
    else{
        return(
            <div className="flex justify-end">
                <p  
                onClick={() => PonRouteChange('signIn')}
                className="naviClass w-10 pa2 ma2 f4 underline pointer grow">Sign In</p>
                <p 
                onClick={() => PonRouteChange('register')}
                className="naviClass w-10 pa2 ma2 f4 underline pointer grow">Register</p>
            </div>
        )
    }

}

export default Navigation;