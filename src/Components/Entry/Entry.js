import React, {useState} from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMesssage';

// a combination of sign in and register component

// class Entry extends React.Component{
//     constructor(){
//         super();
//         this.state = {

//         }
//     }
// }

const Entry = ({route}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMes, setErrorMes] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
        <div className="pt4">
        <article className="registerClass br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input 
                    onChange={onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="name" name="name"  id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">E-mail</label>
                    <input 
                    onChange={onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" name="email"  id="email"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                    onChange={onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" name="password"  id="password"/>
                </div>
            </div>
            {/* 以上是formbase */}

                    </fieldset>
                    <div className="">
                    <input 
                    // connect to home page
                    // onClick={this.onRegisterButton}
                    className=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register"/>
                    </div>
                </div>
            </main>
        </article> 
        <ErrorMessage
            errorMessage={errorMes}
        />
        </div>

    )
}

export default Entry;