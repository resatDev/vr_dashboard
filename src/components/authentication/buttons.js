import React, { Component } from 'react'

export default class Buttons extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="buttonsMain">
                <div className="loginBtn" onClick={ this.props.login }>
                    Giriş Yap
                </div>
                <div className="registerBtn" onClick={ this.props.registration }>
                    Kaydol
                </div>
            </div>
        )
    }
}
