import React, { Component, Fragment } from 'react'
import ListArea from './components/module/dashboard-list'
import Class from './components/dashboard/classroom/class';
import Header from './components/sidebar/header';
import Button from './components/tags/button';
import MenuIcon from './image/menu.png';
import StudentList from './components/modals/student-list';
import Student from './components/dashboard/classroom/student';
export default class ClassroomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [{class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}, {class: '1', number: 12}],
            sidebarIsOpen: false,
            studentListIsOpen: false,
            students: [{name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' },{name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }, {name: 'Vincent Williamson', age: 31, job: 'iOS Developer', location: 'Washington' }]
        };
        this.handleSidebar = this.handleSidebar.bind(this);
        this.classroomList = this.classroomList.bind(this);
        this.handleStudentList = this.handleStudentList.bind(this);
    }

    studentsList() {
        return this.state.students.map(stu => <Student name={stu.name} age={stu.age} job={stu.job} location={stu.location} />)
    }
    classroomList() {
        return this.state.classrooms.map(classroom => <Class name={ classroom.class } number={ classroom.number} onclick={ this.handleStudentList } />)
    }

    handleSidebar(status) {
        this.setState({
            sidebarIsOpen: status
        });
    }

    handleStudentList(status) {
        this.setState({
            studentListIsOpen: status
        })
    }

    render() {
        return (
            <Fragment>
                { this.state.studentListIsOpen ? <StudentList closeStudentList={ this.handleStudentList } studentList={ this.studentsList() }/> : null}
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
