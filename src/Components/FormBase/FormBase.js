import React from 'react';

class FormBase extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    // get 3 input data, and trigger setState of parent component
    onNameChange = (event) => {
       this.props.setInputState('name', event.target.value)
        // this.setState({name: event.target.value})
    }
    onEmailChange = (event) => {
        this.props.setInputState('email', event.target.value.toLowerCase())  
        //this.setState({email: event.target.value})
    }
    onPasswordChange = (event) => {
        this.props.setInputState('password', event.target.value)
        // this.setState({password: event.target.value})
    }



    render(){
        return(
            // check if it's Reg page or Sign page, render it properly
            this.props.route === 'register' ?
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
            : 
            <div>
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

        )
    }


}


export default FormBase;
