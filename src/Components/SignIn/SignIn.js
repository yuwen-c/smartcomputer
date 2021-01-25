import React from 'react';
import FormBase from '../FormBase/FormBase';
import ErrorMessage from '../ErrorMessage/ErrorMesssage';
// import './SignIn.css';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            errorMes:''
        }
    }

    // wake up the server
    componentDidMount = () => {
        fetch('https://immense-river-02070.herokuapp.com/')
        .then(response => response.json())
        .then(result => {})
    }

    // when input onchange is triggered, set state of signin
    setInputState = (stateName, newState) => {
        this.setState({[stateName]: newState}) // use [] to create dynamic state name
    }

    onClickSignIn = () => {
        // prevent an empty input sign in
        if(this.state.email && this.state.password){
            fetch('https://immense-river-02070.herokuapp.com/signin', {
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
                    this.props.onRouteChange('home');
                    this.props.loadUserFromServer(result); // update mainpage data
                }else{
                    this.setState({errorMes: result});
                }
            })
            .catch()
        }    
        else{
            this.setState({errorMes:'please enter email & password'});
        }
    }
 
    render(){
        return (
            <div className="pt4">
            <article className="signinClass br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>

                        <FormBase
                        route={this.props.route} // get App route to see if it's Reg or Sign
                        setInputState={this.setInputState} // setState function
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
                        onClick={() => this.props.onRouteChange('register')}
                        className="f5 link dim black db pointer">Register</div>
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
}

export default SignIn;