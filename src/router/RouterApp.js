import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AuthPage } from '../pages/AuthPage';
import { DashboardApp } from './DashboardApp';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {

    const dispatch = useDispatch();
    const { cheking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( startChecking());
    }, [dispatch]);

    if (cheking) {
        return(
            <h1>Espere...</h1>
        )
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
                        component={ DashboardApp }
                        isAuthenticated={ !!uid } 
                    />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router> 
    )
}



