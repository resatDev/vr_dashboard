import React, { Component } from 'react';
import Header from './components/sidebar/header';
import MenuIcon from './image/menu.png';
import Button from './components/tags/button';
import MyChart from './components/graphs/chart';
export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarIsOpen: false,
        };
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    handleSidebar(status) {
        this.setState({
            sidebarIsOpen: status
        });
    }

    render() {
        return (
            <div className='dashboard'>
                <Header isopen={ this.handleSidebar } open={this.state.sidebarIsOpen} />
                <h1 className="blue-text center">This is the main Section</h1>
                <Button 
                    class={ 'openMenu' }
                    icon={ MenuIcon }
                    isopen={ this.handleSidebar }
                    text={ 'open_the_menu' }
                />
                <MyChart />

                <MyChart />
                <MyChart />
                <MyChart />
                <MyChart />
            </div>
        )
    }
}
