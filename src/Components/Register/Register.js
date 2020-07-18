import React from 'react';
import FormBase from '../FormBase/FormBase.js';
import ErrorMessage from '../ErrorMessage/ErrorMesssage.js';

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
    // when input onchange is triggered, set state of register
    setInputState = (stateName, newState) => {
        this.setState({[stateName]: newState}) // use [] to create dynamic state name
    }
    // {
     // register button
     onRegisterButton = () => {
        if(this.state.name && this.state.email && this.state.password){       
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
            .catch(console.log)
        }
        else{
            console.log('please fill in the blanks');
            this.setState({errorMes: 'please fill in the blanks'})
        }
    }
    // 註冊錯誤訊息種類：
    // 1. 有任何空白欄位：前端，一開始加if ok
    // 2. email已存在，後端，如果有duplicate就要「回傳訊息到前端」
    

    render(){
        return(
            <div>
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
            <ErrorMessage
                PerrorMessage={this.state.errorMes}
            />
            </div>
        )
    }   
}

export default Register;