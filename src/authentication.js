import React, { Component, Fragment } from 'react';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Back from './image/back.gif';
import Buttons from './components/authentication/buttons';
import MainPage from './main-page';

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
                email: null,
                password: null
            },
            passwordChecking: null,
            authenticationSuccess: false
        };
        this.loginProcess = this.loginProcess.bind(this);
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
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.login);
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

    // TODO: add api call
    loginProcess() {
        !localStorage.getItem('loginCredential') ? localStorage.setItem('loginCredential', {userid: 1}) : console.log('içerdesin bebek');
    }

    makingToast = () => {
        window.M.toast({html: 'Şifreler birbirine eşit değil!'});
    }

    render() {
        return (
            <Fragment>
            {
                (!localStorage.getItem('loginCredential')) ? <div className="mainPage">
                    <div className="leftSide">
                        <img src={Back} alt="background_photo"/>
                    </div>
                    <div className="rightSide">
                        <Buttons registration={ this.openRegistrationPanel } login={ this.openLoginPanel }/>
                        {(this.state.checkPanel) ? <Login handleChange={ this.handleChangeLogin } login={ this.loginProcess } /> : <Register handleChange={ this.handleChangeRegistration } passwordCheck={ this.checkThePassword } />}
                    </div>
                </div> : <MainPage />
            }
            </Fragment>
        )
    }
}
