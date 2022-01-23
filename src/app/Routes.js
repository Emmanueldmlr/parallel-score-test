import React from 'react';

import {BrowserRouter as Router, Switch} from 'react-router-dom';

import NotFound from '../pages/NotFound';

import Guest from '../components/guards/Guest';

import Login from '../pages/Login'

const Routes = (props) => {

    return(

        <>

            <Router>

                <Switch>

                    <Guest path="/" exact component={Login} />

                    <Guest path="*" exact component={NotFound} />

                </Switch>

            </Router>
        </>
    )
    
}

export default Routes;