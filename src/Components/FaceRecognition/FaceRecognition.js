import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({img, faceRegion, faceRegions}) => {
    return(
        <div className='flex justify-center'>
            <div className='mv2 mh4 relative'>
                <img id='imgID' className="" width='' height='auto'
                src={img}  alt=""/>              
                {
                    faceRegions.map((item, index) => {
                        return (
                            <div 
                            key={index} 
                            className='faceRegionClass' 
                            style={item}></div>
                        )
                    })
                }
            </div>
        </div>
    )    
}

export default FaceRecognition;
