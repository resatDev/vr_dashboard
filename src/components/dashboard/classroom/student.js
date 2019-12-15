import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <div className="row person">
                <div className="cell" data-title="Full Name">
                    { this.props.name }
                </div>
                <div className="cell" data-title="Age">
                    { this.props.age }
                </div>
                <div className="cell" data-title="Job Title">
                    { this.props.job }
                </div>
                <div className="cell" data-title="Location">
                    { this.props.location }
                </div>
            </div>
        )
    }
}
