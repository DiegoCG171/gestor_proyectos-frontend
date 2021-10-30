import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { HomePage } from '../pages/HomePage';

export const Dashboard = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router> 
    )
}
