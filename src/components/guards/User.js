import React, {useEffect, useState} from 'react';

import { Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

export const Guest = ({component: Component, guard, ...rest}) => {

    return(

        <ErrorBoundary>

           <Route
            
                {...rest} 

                render={

                    (props) => {
                    
                        return (

                            <>

                                <Component  {...props} />           

                            </>
                            
                        )
        
                    }

                }
                
            /> 
            
        </ErrorBoundary>
    );
}