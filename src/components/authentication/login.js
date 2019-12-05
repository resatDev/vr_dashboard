import React, { Component, Fragment } from 'react';
import VR from '../../image/loginImg.png';

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className="loginCard">
                    <img src={VR} alt="VR in classroom" />
                    <br /> 
                    <label htmlFor="Email">Email</label>
                    <input id="email" type="email" name="email" onChange={ this.props.handleChange } />
                    <label htmlFor="Password">Şifre</label>
                    <input id="password" type="password" name="password" onChange={ this.props.handleChange } />
                    <button className="btn red" onClick={ this.props.login } >Giriş</button>
                </div>
            </Fragment>
        )
    }
}
