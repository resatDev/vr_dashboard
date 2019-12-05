import React, { Component, Fragment } from 'react'
import Sidebar from "react-sidebar";
import avatar from './../../image/avatar.png';
import logo from './../../image/loginImg.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
     
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    sidebar = (
        <div className="sidebar">
            <div className="profile">
                <div className="profileImage">
                    <img src={ avatar } alt="Profile Image"/>
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
    );

    render() {
        return (
            <Fragment>
                <Sidebar
                    sidebar={ this.sidebar }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white", position: 'fixed' } }}
                >
                </Sidebar>
                <button className="menuSign" onClick={() => this.onSetSidebarOpen(true)}></button>
            </Fragment>
        )
    }
}
