import{useReducer, useContext, useEffect } from 'react';

const initialState = {
    email: '',
    password: '',
};

function reducer(state, action) {
    return {
        ...state,
       [action.type]: action.payload
    };
}

function useForm () {

    const [state, onFormChangeDispatch] = useReducer(reducer, initialState);

    const { email, password} = state;
 
    const handleChange = event => onFormChangeDispatch({ type: event.target.id, payload: event.target.value.trim() })

    const handleSubmit = async ({email ,password}) => {

        //validate form
        // dispatch action to submit form
        //
    };

    return {
        email,
        password,
        handleChange,
        handleSubmit,
    }
} 

export default useForm