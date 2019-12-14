import React, { Component } from 'react'

export default class Class extends Component {
    render() {
        return (
            <div className="classroom" onClick={ () => { this.props.onclick(true) } }>
                <div className="classroomName">{`Classroom - ${this.props.name}`}</div>
                <hr />
                <div className="studentsNumber">{`${this.props.number} students`}</div>
            </div>
        )
    }
}
