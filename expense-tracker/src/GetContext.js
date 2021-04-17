import React, {createContext, useReducer} from 'react'
import Reducer from './Reducer.js'


const initialState ={
    transactions:[]
}

export const GetContext = createContext(initialState);

export const ContextProvider =({children})=>{
    const [state,dispatch] = useReducer(Reducer,initialState);

    function del_transaction(id) {
        dispatch({type:"DELETE",
                  payload:id})
    }

    function add_transaction(transaction) {
        dispatch({type:"ADD",
                  payload:transaction})
    }

    return (
        <GetContext.Provider value={
            {
                transactions: state.transactions,
                del_transaction,
                add_transaction
            }
        }>
            {children}
        </GetContext.Provider>
    );
}
