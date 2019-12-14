import React, { Component, Fragment } from 'react'
import ListArea from './components/module/dashboard-list'
import Class from './components/dashboard/classroom/class';
import Header from './components/sidebar/header';
import Button from './components/tags/button';
import MenuIcon from './image/menu.png';
export default class ClassroomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [{class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}],
            sidebarIsOpen: false
        };
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    classroomList() {
        return this.state.classrooms.map(classroom => <Class name={ classroom.class } number={ classroom.number } />)
    }

    handleSidebar(status) {
        this.setState({
            sidebarIsOpen: status
        });

    }

    render() {
        return (
            <Fragment>
                <Header isopen={ this.handleSidebar } open={this.state.sidebarIsOpen} />  
                <div className="classMain">
                    <ListArea classname={ 'classList' }  renderList={ this.classroomList() }/>                
                    <Button 
                        class={ 'openMenu' }
                        icon={ MenuIcon }
                        isopen={ this.handleSidebar }
                        text={ 'open_the_menu' }
                    />
                </div>
            </Fragment>
        )
    }
}
