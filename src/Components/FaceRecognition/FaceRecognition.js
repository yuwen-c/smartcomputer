import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({Pimg, PfaceRegion}) => {
    return(
        // flex-column: column layouts with <p> and child <div>
        <div className='flex flex-column ma mb2'>
            <p className="f4">Janet Jackson says Hi to you.</p>
            {/* justify-center: put child <div> in the middle */}
            <div className='flex justify-center'>
                <div className='mt2 relative'>
                    <img id='imgID' className="" width='500px' height='auto'
                    src={Pimg}  alt=""/>              
                    <div 
                    className='faceRegionClass' 
                    style={PfaceRegion}></div>
                    {/* PfaceRegion is an style object */}
                </div>
            </div>
        </div>
    )    
}

export default FaceRecognition;
