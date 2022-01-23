import React from 'react';

import { useHistory } from "react-router";

import { Link } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();

    return (

        <>

            <section class="section">

                <div class="container text-center">

                    <h2 class="text-25 mb-0">404</h2>

                    <h3 class="text-6 mb-3">oops! The page you requested was not found!</h3>

                    <p class="text-3 text-muted">The page you are looking for was moved, removed, renamed or might never existed.</p>

                    <Link to='/'>
                    
                        <a href="/" class="btn kinomo-primary-btn shadow-none px-5 m-2">Home</a>
                    
                    </Link>
   
                    <a href="/" onClick={ () => {  history.goBack();  } } class="btn btn-outline-dark shadow-none px-5 m-2">Back</a> </div>

            </section>
        </>

    );

}


export default NotFound;