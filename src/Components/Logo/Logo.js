import React from 'react';
import Tilt from 'react-tilt'
import svg from './iconfinder_face_ID_2639811.svg';

const Logo = () => {
    return(
        <div>
        <Tilt className="logoClass Tilt h4 w4 ml3" options={{ max : 60 }}  >
            <div className="Tilt-inner">  
                <img src={svg} alt='logo'/>
                <div>Face Finder!</div>
            </div>
        </Tilt>
        </div>
    )
}

export default Logo;

