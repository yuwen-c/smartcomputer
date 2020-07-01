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
    // when input onchange is triggered, set state of register
    setInputState = (stateName, newState) => {
        this.setState({[stateName]: newState}) // use [] to create dynamic state name
    }

     // register button
     onRegisterButton = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                this.state  // use an object directly
            )
        })
        .then(response => response.json())
        .then(data => {
            this.props.PonRouteChange('home'); // direct to mainpage
            this.props.PloadUserFromServer(data); // call parent function to setState the parent state ****
        }) 
    }

    render(){
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    
                    <FormBase
                    Proute={this.props.Proute} // get App route to see if it's Reg or Sign
                    PsetInputState={this.setInputState} // setState function
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