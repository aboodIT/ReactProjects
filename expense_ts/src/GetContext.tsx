import React, {createContext, useReducer} from 'react'
import Reducer from './Reducer'
import {transactionType} from './AddTransaction'

type transactionsArray = {
    transactions:transactionType[],
}

const initialState:any = {
    transactions:[]
}

export type valueType = {
    transactions:transactionType[],
    del_transaction:(id: number) => void,
    add_transaction: (transaction: transactionType) => void
}

type ContextValue = valueType | transactionsArray;



export const GetContext = createContext<valueType>(initialState);

export const ContextProvider:React.FunctionComponent<React.ReactNode> =({children})=>{
    const [state,dispatch] = useReducer(Reducer,initialState);

    function del_transaction(id:number):void {
        dispatch({type:"DELETE",
                  payload:id})
    }

    function add_transaction(transaction:transactionType):void {
        dispatch({type:"ADD",
                  payload:transaction})
    }

    let value:valueType = {
            transactions: state.transactions,
            del_transaction,
            add_transaction
    }

    return (
        <GetContext.Provider value = {value}>
            {children}
        </GetContext.Provider>
    );
}
