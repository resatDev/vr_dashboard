import React, { Component, Fragment } from 'react';
import MyChart from './components/graphs/chart';

export default class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <MyChart />
                <MyChart />
                <MyChart />
                <MyChart />
                <MyChart />
                <MyChart />
            </Fragment>
        )
    }
}
