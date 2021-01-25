import React from 'react';
// import './Register.css';
import FormBase from '../FormBase/FormBase.js';
import ErrorMessage from '../ErrorMessage/ErrorMesssage.js';;


class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'',
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
    
    // when input onchange is triggered, set state of register
    setInputState = (stateName, newState) => {
        this.setState({[stateName]: newState}) // use [] to create dynamic state name
    }
    // {
     // register button
     onRegisterButton = () => {
        if(this.state.name && this.state.email && this.state.password){       
            fetch('https://immense-river-02070.herokuapp.com/register', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    this.state  // use an object directly
                )
            })
            .then(response => response.json())
            .then(data => {
                if(data.id){
                    this.props.onRouteChange('home'); // direct to mainpage
                    this.props.loadUserFromServer(data); // call parent function to setState the parent state     
                }
                else{
                    this.setState({errorMes: data});
                }
           }) 
            .catch(() => {this.setState({errorMes: "failed: registration"})})
        }
        else{
            this.setState({errorMes: 'please fill in the blanks'})
        }
    }

    render(){
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
                        />

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
}

export default Register;