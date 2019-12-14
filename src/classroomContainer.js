import React, { Component, Fragment } from 'react'
import ListArea from './components/module/dashboard-list'
import Class from './components/dashboard/classroom/class';

export default class ClassroomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [{class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}]
        };
    }

    classroomList() {
        return this.state.classrooms.map(classroom => <Class name={ classroom.class } number={ classroom.number } />)
    }
    render() {
        return (
            <Fragment>
                <ListArea classname={ 'classList' }  renderList={ this.classroomList() }/>
            </Fragment>
        )
    }
}
