import React, {useState} from 'react';

// a combination of sign in and register component

// class Entry extends React.Component{
//     constructor(){
//         super();
//         this.state = {

//         }
//     }
// }

const Entry = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMes, setErrMes] = useState('');

    return(
        <div className="pt4">
        <article className="registerClass br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>

                    <FormBase
                    route={this.props.route} // get App route to see if it's Reg or Sign
                    setInputState={this.setInputState} // setState function
                    email={this.state.email}
                    />
                <div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input 
                    onChange={this.onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="name" name="name"  id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">E-mail</label>
                    <input 
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" name="email"  id="email"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input 
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" name="password"  id="password"/>
                </div>
            </div>
            {/* 以上是formbase */}

                    </fieldset>
                    <div className="">
                    <input 
                    // connect to home page
                    onClick={this.onRegisterButton}
                    className=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register"/>
                    </div>
                </div>
            </main>
        </article> 
        <ErrorMessage
            errorMessage={this.state.errorMes}
        />
        </div>

    )
}

export default Entry;