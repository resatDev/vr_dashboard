import React, { Component } from 'react'
import Class from './classroom/class'
export default class Classrooms extends Component {
    classroomLists = () => {
        const classroomList = this.props.classrooms;
        return (classroomList) ? classroomList.map(classroom => <Class name={ classroom.class } number={ classroom.number } />) : null;
    } 

    render() {
        return (
            <div className="classList">
                { !this.classroomLists() ? <span style={{color:'white', margin:'30px'}}>Loading...</span> : this.classroomLists() }
            </div>
        )
    }
}
