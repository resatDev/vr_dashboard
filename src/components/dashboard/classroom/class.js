import React, { Component } from 'react'

export default class Class extends Component {
    render() {
        return (
            <div className="classroom">
                <div className="classroomName">{`Classroom - ${this.props.name}`}</div>
                <hr />
                <div className="studentsNumber">{`${this.props.number} students`}</div>
            </div>
        )
    }
}
