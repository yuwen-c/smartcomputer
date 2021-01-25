import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({onInputChange, onImageClick, onDeleteButton, inputValue}) => {
    return (
        <div className="w-80 center">
            <div className="formClass center pt3 pb3 ph3 br2 ba b--black-10">
                <legend className="legendClass center f4 b black-70 pb1">
                Face recognition</legend>
                <div>

                    <div className="w-90 w-75-m w-80-l relative dib ">
                        <input className="f6 f5-l input-reset bn black-80 
                        bg-white pa3 lh-solid w-100 br2 br--top br--left-ns" 
                        placeholder="Face image link" type="text" value={inputValue}
                        onChange={onInputChange}/>

                        <span className="clearButton w-10 w2-ns absolute pa2">
                            <svg 
                            onClick={onDeleteButton}
                            className="center"             
                            fill='none' stroke='#222222' strokeWidth='8' strokeDashoffset='0' strokeDasharray='0' strokeLinecap='round' strokeLinejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                            <polygon fill="none" points="5,50 30,20 90,20 90,80 30,80"/> 
                            <line x1="70" y1="38" x2="45" y2="62" /> 
                            <line x1="45" y1="38" x2="70" y2="62" />
                            </svg>
                        </span>
                    </div> 

                    <input className="f6 f5-l button-reset pv3 tc bn 
                    bg-animate bg-black-70 hover-bg-black white pointer 
                    w-90 w-25-m w-20-l br2 br--bottom br--right-ns" 
                    type="submit" value="Detect Now"
                    onClick={onImageClick}/>
                </div>
            </div>
        </div>
    )
}

export default ImgLinkForm;
// input attribute:
// name="email-address" value="" id="email-address"