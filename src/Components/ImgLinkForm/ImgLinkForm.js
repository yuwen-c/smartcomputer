import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({PonInputChange, PonImageClick}) => {
    return (
        <div className="pa2-l">
            <div className="formClass mw7 center pa4 br2-ns ba b--black-10">
                <legend className="center pa0 f3 fw4 mb3 black-80 ">Face recognition</legend>
                <div className="cf">
                    <input className="f6 f5-l input-reset bn fl black-80 
                    bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                    placeholder="Face image link" type="text" 
                    onChange={PonInputChange}/>
                    <input className="f6 f5-l button-reset fl pv3 tc bn 
                    bg-animate bg-black-70 hover-bg-black white pointer 
                    w-100 w-25-m w-20-l br2-ns br--right-ns" 
                    type="submit" value="Detect Now"
                    onClick={PonImageClick}/>
                </div>
            </div>
        </div>
    )
}

export default ImgLinkForm;
// input attribute:
// name="email-address" value="" id="email-address"