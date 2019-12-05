import React, { Component, Fragment } from 'react'

export default class Register extends Component {
    render() {
        return (
            <Fragment>
                <div className="registerCard">
                        <label htmlFor="name">İsim ve Soyisim</label>
                        <input type="text" name="name" onChange={ this.props.handleChange } required />

                        <label htmlFor="username">Kullanıcı Adı</label>
                        <input type="text" name="username" onChange={ this.props.handleChange } required />

                        <label htmlFor="email">Mail Adresi</label>
                        <input type="text" name="email" onChange={ this.props.handleChange } required />
                        
                        <label htmlFor="password">Şifre</label>
                        <input type="password" name="password" onChange={ this.props.handleChange } required />

                        <label htmlFor="password">Şifre Tekrar</label>
                        <input type="password" name="passwordAgain" onChange={ this.props.handleChange } required />
                        
                        <button className="btn red" onClick={ this.props.passwordCheck }>Kaydol</button>
                </div>
            </Fragment>
        )
    }
}
