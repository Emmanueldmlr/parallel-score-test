import React from 'react';

import { Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';


const Guest = ({component: Component, guard, ...rest}) => {

    return(

        <ErrorBoundary>

           <Route
            
                {...rest} 

                render={

                    (props) => {
                    
                        return (

                            <Component  {...props} />           
                            
                        )
        
                    }
                }
                
            /> 
            
        </ErrorBoundary>
    );
}

export default Guest;