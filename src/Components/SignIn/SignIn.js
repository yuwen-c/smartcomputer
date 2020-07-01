import React from 'react';
import FormBase from '../../Components/FormBase';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    // when input onchange is triggered, set state of signin
    setInputState = (stateName, newState) => {
        this.setState({[stateName]: newState}) // use [] to create dynamic state name
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

                        <FormBase
                        Proute={this.props.Proute} // get App route to see if it's Reg or Sign
                        PsetInputState={this.setInputState} // setState function
                        />

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