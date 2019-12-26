import React, { Component } from 'react';
import ModuleImg from './../image/module.png';

export default class Card extends Component {
    render() {
        return (
            <div className="outer-card">
                <div className="row">
                    <div className="col s1 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={ ModuleImg } alt='Module Card' />
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a Link!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
