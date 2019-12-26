import React, { Component } from 'react'
import ModuleImg from './image/module.png';
import MenuIcon from './image/menu.png';
import Header from './components/sidebar/header';
import Button from './components/tags/button';
import Card from './components/card';

export default class Modules extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarIsOpen: false
        }
        this.handleSidebar = this.handleSidebar.bind(this);
    }
    handleSidebar(status) {
        this.setState({
            sidebarIsOpen: status
        });
    }
    render() {
        return (
            <div className='module'>
                <Header
                    isopen={ this.handleSidebar } 
                    open={this.state.sidebarIsOpen}
                />
                <Button 
                    class={ 'openMenu' }
                    icon={ MenuIcon }
                    isopen={ this.handleSidebar }
                    text={ 'open_the_menu' }
                />
                <h1 className="red-text center">
                    This is the Module Section.
                </h1>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}
