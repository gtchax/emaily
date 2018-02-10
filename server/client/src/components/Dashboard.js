import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
            <h2>The Dashbord</h2>
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <Link to="/surveys/new">
                        <i className="material-icons">add</i>
                    </Link>
                </a>
            </div>
            </div>
        )
    }
};

export default Dashboard;