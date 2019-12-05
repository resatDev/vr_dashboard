import React, { Component, Fragment } from 'react';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Back from './image/back.gif';
import Buttons from './components/authentication/buttons';
import { login } from './api/api';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
            checkPanel: true,
            registration: {
                name: null,
                email: null,
                username: null,
                password: null,
                passwordAgain: null
            },
            login: {
                login: null,
                password: null
            },
            passwordChecking: null,
            authentication: false
        }
    }

    fillform = (e) => {
        document.getElementById('email').value = 'resat@resat.com';
        document.getElementById('password').value = 'resat';
    }

    openRegistrationPanel = () => {
        this.setState({
            checkPanel: false
        });
    }

    openLoginPanel = () => {
        this.setState({
            checkPanel: true
        });
    }   

    handleChangeRegistration = (e) => {
        e.preventDefault();
        this.setState({
            registration: {
                ...this.state.registration,
                [e.target.name]: e.target.value,
            }
        });
    }

    handleChangeLogin = (e) => {
        e.preventDefault();
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        })
    }

    checkThePassword = () => {
        (this.state.registration.password === this.state.registration.passwordAgain) ? 
        this.setState({
            passwordChecking: true
        }) : 

        this.setState({
            passwordChecking: false
        });
        (this.state.passwordChecking) ? this.makingToast() : alert('osman osman osman osman');
    }

    loginProcess = async() => {
        let response = await login(this.state.login.email, this.state.login.password)
        
    }

    makingToast = () => {
        window.M.toast({html: 'Şifreler birbirine eşit değil!'});
    }

    render() {
        if(this.state.authentication){
            <Redirect to='/' />
        }
        return (
            <Fragment>
                <button id="fillForm" className="btn red" onClick={ this.fillform }>Fill Form</button>
                <div className="mainPage">
                    <div className="leftSide">
                        <img src={Back} alt="background_photo"/>
                    </div>
                    <div className="rightSide">
                        <Buttons registration={ this.openRegistrationPanel } login={ this.openLoginPanel }/>
                        {(this.state.checkPanel) ? <Login handleChange={ this.handleChangeLogin } login={ this.loginProcess } /> : <Register handleChange={ this.handleChangeRegistration } passwordCheck={ this.checkThePassword } />}
                    </div>
                </div>
            </Fragment>
        )
    }
}
