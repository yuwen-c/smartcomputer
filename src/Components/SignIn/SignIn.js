import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onClickSignIn = () => {
        // prevent an empty input sign in
        if(this.state.email || this.state.password){
        fetch('http://localhost:3000/signin', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(result => {  // get user from server
            if(result.id){
                console.log(result, result.id)
                this.props.PonRouteChange('home');
                this.props.PloadUserFromServer(result); // update mainpage data
            }else{
                console.log(result);
            }
        })
       }
        else{
            console.log('please enter email & password')
        }
    }

    render(){
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">E-mail</label>
                            <input 
                            onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email"  id="email" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                        // connect to home page   
                        onClick={this.onClickSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <div 
                        // connect to register page  
                        onClick={() => this.props.PonRouteChange('register')}
                        className="f5 link dim black db pointer">Register</div>
                        </div>
                    </div>
                </main>
            </article>
    
        )

    }
}

export default SignIn;