import React, { Component } from 'react';
import Button from '../tags/button';
import CloseIcon from './../../image/close.png';

export default class StudentList extends Component {
    render() {
        return (
            <div className="limiter">
            <div className="back"></div>
            <Button 
                class={ 'closeStudentList' }
                icon={ CloseIcon }
                isopen={ () => this.props.closeStudentList(false) }
                text={ 'close ' }
            />
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="table">

                            <div className="row header">
                                <div className="cell">
                                    Full Name
                                </div>
                                <div className="cell">
                                    Age
                                </div>
                                <div className="cell">
                                    Job Title
                                </div>
                                <div className="cell">
                                    Location
                                </div>
                            </div>
                            {this.props.studentList ? this.props.studentList : <span className="loading">Loading...</span>}

                        </div>
                    </div>
                </div>
	        </div>
        )
    }
}
