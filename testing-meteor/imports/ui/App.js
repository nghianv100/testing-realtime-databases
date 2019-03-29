import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nUpdates: 0,
            nPing: 0
        }
    }

    test1000() {
        Meteor.call('test1000', {});
    }

    test5000() {
        Meteor.call('test5000', {});
    }

    test10000() {
        Meteor.call('test10000', {});
    }

    refresh() {
        Meteor.call('refresh', {});
    }

    componentDidMount() {
        const that = this;

        setInterval(function() {
            that.setState({
                nUpdates: that.props.tasks.length,
                nPing: that.props.tasks[0] ? that.props.tasks[that.props.tasks.length - 1].createAt.getTime() - that.props.tasks[0].createAt.getTime() : 0
            });
        }, 500);
    }

    render() {
        const items = this.props.tasks.map(doc => {
            return <p key={doc.id}>Document ID: {doc.id}, Timestamp: {doc.createAt.getTime()}</p>
        });

        return (
            <div className="container">
                <header>
                    <div className="logo">
                        <img src="https://d14jjfgstdxsoz.cloudfront.net/assets/logo.svg" />
                    </div>
                    <div className="title">
                        <h2>Realtime Database Test Tool</h2>
                        <h4>by Nguyen Van Nghia</h4>
                    </div>
                    <div className="clearfix"></div>
                </header>
                <main>
                    <div className="table-area">
                        {items}
                    </div>
                    <div className="info-area">
                        <p className="n-updates">Tổng số lần cập nhật: <span>{this.state.nUpdates}</span></p>
                        <p className="n-ping">Tổng thời gian trễ: <span>{this.state.nPing} (ms)</span></p>
                        <button onClick={this.test1000} id='btn-test'>Update 1000 times</button>
                        <button onClick={this.test5000} id='btn-test'>Update 5000 times</button>
                        <button onClick={this.test10000} id='btn-test'>Update 10000 times</button>
                        <button onClick={this.refresh} id='btn-refresh'>Refresh</button>
                    </div>
                    <div className="clearfix"></div>
                </main>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
})(App);

// , { sort: { createAt: -1 } }