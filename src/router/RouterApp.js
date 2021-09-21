import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';

export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/auth" component={AuthPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}



