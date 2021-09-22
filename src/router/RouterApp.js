import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';

export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthPage} />
                    <Route exact path="/home" component={HomePage} />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router>
    )
}



