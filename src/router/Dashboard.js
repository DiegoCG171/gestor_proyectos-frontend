import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { areasStartLoading } from '../actions/areas';
import { projectsQAStartLoading } from '../actions/projectsQA';
import { resourcesAllStartLoading } from '../actions/resources';
import { Sidebar } from '../components/shared/Sidebar';
import { AreasPage } from '../pages/AreasPage';
import { HomePage } from '../pages/HomePage';
import { ProjectsQA } from '../pages/ProjectsQA';
import { ProjectsQAPage } from '../pages/ProjectsQAPage';
import { ResourcesPage } from '../pages/ResourcesPage';

export const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(areasStartLoading());
    }, [dispatch]);

    useEffect(() => {
        dispatch(resourcesAllStartLoading());
    }, [dispatch]);

    useEffect(() => {
        dispatch(projectsQAStartLoading());
    }, [dispatch]);

    return (
        <Router>
            <div style={{ 'display': 'flex'}} >
                <Sidebar />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/areas" component={AreasPage} />
                    <Route exact path="/resources" component={ResourcesPage} />
                    <Route exact path="/projectsQA" component={ProjectsQAPage } />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}
