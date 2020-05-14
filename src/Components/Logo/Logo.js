import React from 'react';
import Tilt from 'react-tilt'
import faceLogo from './facial_recognition.png';
import './Logo.css';

const Logo = () => {
    return(
        <Tilt className="logoClass Tilt h4 w4 ml3" options={{ max : 60 }}  >
            <div className="Tilt-inner">  
                <img src={faceLogo} />
            </div>
        {/* icon attibute */}
        {/* Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
        </Tilt>
    )
}

export default Logo;

// 正方形faceID的attribute
//<a href="https://icons8.com/icon/77182/face-id">Face ID icon by Icons8</a>