import React from 'react';
// import './FaceRecognition.css'

const FaceRecognition = ({Pimg}) => {
    return(
        <div className='flex flex-column'>
            <p className=" f3-m f3-l measure lh-title mt0 center">
                Janet Jackson says Hi to you.</p>
            <img id='imgID' className="w-70 dib measure f3 center mb3" 
            src={Pimg}  alt=""/>
        </div>
    )    
}

export default FaceRecognition;