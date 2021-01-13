import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({onInputChange, onImageClick, inputValue}) => {
    return (
        <div className="pa2-l">
            <div className="formClass mw7 center pa4 br2-ns ba b--black-10">
                <legend className="legendClass center pa0 f2 fw9 mb3 black-80 b ">Face recognition</legend>
                <div className="cf">
                    <input className="f6 f5-l input-reset bn fl black-80 
                    bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                    placeholder="Face image link" type="text" value={inputValue}
                    onChange={onInputChange}/>
                    <input className="f6 f5-l button-reset fl pv3 tc bn 
                    bg-animate bg-black-70 hover-bg-black white pointer 
                    w-100 w-25-m w-20-l br2-ns br--right-ns" 
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