import React from "react";
import axios from 'axios';
import thunk from 'redux-thunk';

export const loadResult = ({ results: {}}) => ({
    type: 'LOAD_RESULT',
    payload: {}
});

export const getResult = searchList => {
    return async (dispatch)=> {
        dispatch(loading(searchList));
        try {
            const listRepo = await fetchlistRepo(searchList);
        } catch(e) {
        console.warn(e.message)
        dispatch({ type: 'SET_ERROR', payload: err.message })
                    }
        }
    }

    export const fetchlistRepo = async searchList => {
        try {
            const {data } = await axios.get(`https://api.github.com/users/repos/${searchList})`
            return data[0];
        } catch (err) {
            if (data.status === 404) { throw Error('That\'s not a valid Repo!') }
            throw new Error(err.message)
             }
         } 

   
