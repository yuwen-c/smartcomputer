import React from 'react';
import FormBase from '../FormBase.js';

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password:''
        }
    }

    // register的三個空格
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

     // register button
     onRegisterButton = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                this.state  // 可以用直接object
            )
        })
        .then(response => response.json())
        .then(data => {
          //  console.log('register', data) // ok有抓到
            this.props.PonRouteChange('home'); // direct to mainpage
            this.props.PloadUserFromServer(data); // call parent function to setState the parent state ****
        }) 
    }

 // render 的地方，放formBase，也就是原本是register的code
 // 不過register button必須要連接到 app的function: route change, load user

    render(){
        return(

            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                        onChange={this.onNameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="name" name="name"  id="name"/>
                    </div>
                    <FormBase
                    PonEmailChange={this.onEmailChange}
                    PonPasswordChange={this.onPasswordChange}
                    />
                    </fieldset>
                    <div className="">
                    <input 
                    // connect to home page
                    onClick={this.onRegisterButton}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register"/>
                    </div>
                </div>
            </main>
        </article>

        
        )
    }
    
}

export default Register;