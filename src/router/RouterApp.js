import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startCheckig } from '../actions/auth';
import { AuthPage } from '../pages/AuthPage';
import { Dashboard } from './Dashboard';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {
    
    const { uid } = useSelector(state => state.auth);
    const { loading } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startCheckig());
    },[dispatch]);

    if (loading) {
        return <h1>Espere</h1>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/auth" 
                        component={AuthPage}
                        isAuthenticated={ !!uid } 
                    />
                    <PrivateRoute 
                        path="/" 
                        component={ Dashboard } 
                        isAuthenticated={ !!uid } 
                    />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router> 
    )
}



