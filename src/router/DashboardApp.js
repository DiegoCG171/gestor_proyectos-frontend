import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { startAreasLoading } from '../actions/areas';
import { startProjectsQALoading } from '../actions/projectsQA';
import { startResourcesLoading } from '../actions/resources';
import { AreasPage } from '../pages/AreasPage';
import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ResourcesPage } from '../pages/ResourcesPage';

export const DashboardApp = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch( startAreasLoading());
    },[dispatch]);

    useEffect(() => {
        dispatch( startProjectsQALoading());
    }, [dispatch]);

    useEffect(() => {
        dispatch( startResourcesLoading());
    },[dispatch]);

    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/home" 
                        component={ HomePage }
                    />
                    <Route
                        exact 
                        path="/areas"
                        component={AreasPage} 
                    />
                    <Route
                        exact 
                        path="/projectsQA"
                        component={ ProjectsPage } 
                    />
                    <Route
                        exact 
                        path="/resources"
                        component={ResourcesPage} 
                    />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router> 
    )
}
