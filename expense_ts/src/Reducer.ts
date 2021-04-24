import {transactionType} from './AddTransaction'
export default (state:any, action:any) => {
    switch(action.type){
        case 'DELETE':
            return{
                ...state,
                transactions:state.transactions
                .filter((transaction:transactionType)=>(transaction.id !== action.payload))
            }
        
        case 'ADD':
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
        default:
            return state;
    }
}