import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({onInputChange, onImageClick, inputValue}) => {
    return (
        <div className="w-80 center">
            <div className="formClass center pt3 pb3 ph3 br2 ba b--black-10">
                <legend className="legendClass center f4 b black-70 pb1">
                Face recognition</legend>
                <div>
                    <input className="f6 f5-l input-reset bn black-80 
                    bg-white pa3 lh-solid w-90 w-75-m w-80-l br2 br--top br--left-ns" 
                    placeholder="Face image link" type="text" value={inputValue}
                    onChange={onInputChange}/>

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