import React from 'react';

import {BrowserRouter as Router, Switch} from 'react-router-dom';

import NotFound from '../pages/NotFound';

import Guest from '../components/guards/Guest';

// import {User} from '../components/guard/User';

import Login from '../pages/Login'

import Register from '../pages/Register';

// import Dashboard from '../pages/Dashboard';

const Routes = (props) => {

    return(

        <>

            <Router>

                <Switch>

                    {/* <Guest path="/" exact component={Landing} /> */}

                    <Guest path="/login" exact component={Login} />

                    <Guest path="/register" exact component={Register} />

                    <Guest path="*" exact component={NotFound} />

                </Switch>

            </Router>
        </>
    )
    
}

export default Routes;