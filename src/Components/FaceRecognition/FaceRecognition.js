import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({Pimg, PfaceRegion, PfaceRegions}) => {
    console.log("FaceRecognition-PfaceRegion:",PfaceRegion);
    console.log("FaceRecognition-PfaceRegions:",PfaceRegions);
    return(
        // flex-column: column layouts with <p> and child <div>
        <div className='flex flex-column ma mb2'>
            <p className="f4">Janet Jackson says Hi to you.</p>
            {/* justify-center: put child <div> in the middle */}
            <div className='flex justify-center'>
                <div className='mt2 relative'>
                    <img id='imgID' className="" width='500px' height='auto'
                    src={Pimg}  alt=""/>              
                    {/* PfaceRegion is an style object */}
                    {
                        PfaceRegions.map((item, index) => {
                            return (
                                <div 
                                        className='faceRegionClass' 
                                        style={item}></div>
                            )
                        })
                    }


                    {
                    // Object.entries(PfaceRegion).map((item, index) => {
                    //     return (
                    //         <div 
                    //         key='index' 
                    //         className='faceRegionClass' 
                    //         style={item}>
                    //         </div> 
                    //     )
                    // })
                    }

                </div>
            </div>
        </div>
    )    
}

export default FaceRecognition;
