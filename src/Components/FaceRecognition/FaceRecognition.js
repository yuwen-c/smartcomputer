import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({img, faceRegion, faceRegions}) => {
    return(
          //  {/* justify-center: put child <div> in the middle */}
        <div className='flex justify-center'>
            <div className='mt2 mb2 relative'>
                <img id='imgID' className="" width='500px' height='auto'
                src={img}  alt=""/>              
                {/* one face version:      
                faceRegion is an style object, pass it directly to style*/}
                {/* <div 
                className='faceRegionClass' 
                style={PfaceRegion}></div> */}
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
