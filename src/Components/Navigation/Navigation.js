import React from 'react';

const Navigation = ({isSignedIn, onRouteChange}) => {
    // home page: sign out
    if(isSignedIn){
        return(
            <div className="h3">
            <div className="flex justify-end mt2 mh2">
                <p
                onClick={() => onRouteChange('signIn')}
                className="f6 b ba br2 pv1 ph2 dim dark-gray mr2">
                Sign Out</p>
            </div>
            </div>
        )
    }

    // Sign in page: sign in, register
    else{
        return(
            <div className="h3">
                <div className="flex justify-end mt2 mh2">
                    <p  
                    onClick={() => onRouteChange('signIn')}
                    className="f6 b ba br2 pv1 ph2 dim dark-gray mr2">
                    Sign In</p>
                    <p 
                    onClick={() => onRouteChange('register')}
                    className="f6 b ba br2 pv1 ph2 dim dark-gray mr2">
                    Register</p>
                </div>
            </div>
        )
    }

}

export default Navigation;