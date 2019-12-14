import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import avatar from './../../image/avatar.png';
import logo from './../../image/loginImg.png';

export default class Header extends Component {
    sidebar = (
        <div>
            <div className="sidebarDeep" onClick={ () => this.props.isopen(false)}></div>
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
                    <Link className="sideElement" to="/classroom">Modules</Link>
                    <Link className="sideElement" to="/classroom">Classes</Link>
                    <Link className="sideElement" to="/classroom">Students</Link>
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
                { this.props.open ? (this.sidebar) : null }
            </Fragment>
        )
    }
}
