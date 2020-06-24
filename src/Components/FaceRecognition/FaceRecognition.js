import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({Pimg, PfaceRegion, PfaceRegions}) => {
    return(
          //  {/* justify-center: put child <div> in the middle */}
        <div className='flex justify-center'>
            <div className='mt2 mb2 relative'>
                <img id='imgID' className="" width='500px' height='auto'
                src={Pimg}  alt=""/>              
                {/* one face version:      
                PfaceRegion is an style object, pass it directly to style*/}
                {/* <div 
                className='faceRegionClass' 
                style={PfaceRegion}></div> */}
                {
                    PfaceRegions.map((item, index) => {
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
