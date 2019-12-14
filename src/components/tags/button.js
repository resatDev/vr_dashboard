import React, { Component, Fragment } from 'react'

export default class Button extends Component {
    render() {
        return (
            <Fragment>
                <button
                    id='buttonComponent'
                    className={ this.props.class }
                    onClick = { () => {this.props.isopen(true)} }
                >
                    <img src={ this.props.icon } alt={ this.props.text }/>
                </button>
            </Fragment>
        )
    }
}
