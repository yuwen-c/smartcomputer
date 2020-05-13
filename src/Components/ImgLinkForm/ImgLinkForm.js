import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = () => {
    return (
        <div className="pa2-l">
            <form className="bg-washed-green mw7 center pa4 br2-ns ba b--black-10">
                {/* <fieldset className="cf bn ma0 pa0"> */}
                <legend className="center pa0 f3 fw4 mb3 black-80 ">Face recognition</legend>
                <div className="cf">
                    {/* <label className="clip" for="email-address">Email Address</label> */}
                    <input className="f6 f5-l input-reset bn fl black-80 
                    bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                    placeholder="Face image link" type="text" 
                    name="email-address" value="" id="email-address"/>
                    <input className="f6 f5-l button-reset fl pv3 tc bn 
                    bg-animate bg-black-70 hover-bg-black white pointer 
                    w-100 w-25-m w-20-l br2-ns br--right-ns" 
                    type="submit" value="Detect Now"/>
                </div>
                {/* </fieldset> */}
            </form>
        </div>
    )
}

export default ImgLinkForm;
