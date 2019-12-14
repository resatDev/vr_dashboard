import React, { Component, Fragment } from 'react'
import avatar from './../../image/avatar.png';
import logo from './../../image/loginImg.png';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarIsOpen: false
        }
    }
    
    sidebar = (
        <div>
            <div className="sidebarDeep" onClick={ () => {this.setState({ sidebarIsOpen: false })}}></div>
            <div className="sidebar">
                <div className="profile">
                    <div className="profileImage">
                        <img src={ avatar } alt="Profile_Image" />
                    </div>
                    <div className="teacher">Teacher</div>
                    <div className="name">Admin</div>
                </div>
                <hr/>
                <div className="sideBarMenu">
                    <div className="sideElement">Modules</div>
                    <div className="sideElement">Classes</div>
                    <div className="sideElement">Students</div>
                </div>
                <div className="logo">
                    <img src={ logo } alt="Logo"/>
                </div>
                <div className="footer">
                    ©Copright 2019 - VClass
                </div>
            </div>
        </div>
    );

    render() {
        return (
            <Fragment>
                { (this.state.sidebarIsOpen) ? (this.sidebar) : null }
                <button className="btn red" onClick={ () => {this.setState({ sidebarIsOpen: true })}}>Aç</button>
            </Fragment>
        )
    }
}
