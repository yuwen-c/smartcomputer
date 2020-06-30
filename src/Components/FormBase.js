import React from 'react';

const FormBase = ({PonEmailChange, PonPasswordChange}) => {
    return(
        <div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">E-mail</label>
                <input 
                onChange={PonEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" name="email"  id="email"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                onChange={PonPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" name="password"  id="password"/>
            </div>
        </div>
    )
}
export default FormBase;
