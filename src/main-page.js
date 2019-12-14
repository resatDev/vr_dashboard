import React, { Component } from 'react';
import Header from './components/sidebar/header';
import MenuIcon from './image/menu.png';
import Button from './components/tags/button';
import Class from './components/dashboard/classroom/class';
import ListArea from './components/module/dashboard-list';
export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarIsOpen: false,
            classrooms: [{class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}]
        };
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    handleSidebar(status) {
        this.setState({
            sidebarIsOpen: status
        });
    }

    classroomList() {
        return this.state.classrooms.map(classroom => <Class name={ classroom.class } number={ classroom.number } />)
    }
    render() {
        return (
            <div className='dashboard'>
                <Header isopen={ this.handleSidebar } open={this.state.sidebarIsOpen} />
                <Button 
                    class={ 'openMenu' }
                    icon={ MenuIcon }
                    isopen={ this.handleSidebar }
                    text={ 'open_the_menu' }
                />
                <ListArea classname={ 'classList' }  renderList={ this.classroomList() }/>
            </div>
        )
    }
}
