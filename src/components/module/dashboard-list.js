import React, { Component } from 'react'

export default class ListArea extends Component {
    render() {
        return (
            <div className={ this.props.classname }>
                { this.props.renderList ? this.props.renderList : <span className="loading">Loading...</span>}
            </div>
        )
    }
}
