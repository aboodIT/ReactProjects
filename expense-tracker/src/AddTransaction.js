import React, {useState,useContext} from 'react';
import { GetContext } from './GetContext';
import './AddTransaction.css';
import Button from '@material-ui/core/Button';

export const AddTransaction = () => {
    const [detail, setDetail] = useState("");
    const [amount,setAmount] = useState()

    const { add_transaction } = useContext(GetContext);
 
    function onSubmit(e){
        e.preventDefault()
        const transaction = {
            id: new Date().getTime(),
            detail: detail,
            amount: amount,
        }
        add_transaction(transaction)

    
    }

    return (
        <div className='heading2'>
            <h2 >Add New Transaction</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="description" style={{display:"block"}}>Description</label>
                    <input type="text" 
                            value={detail}
                            id="description"  
                            placeholder="Enter transaction" 
                            onChange={(e)=>(setDetail(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="amount" style={{display:"block"}}>Amount</label>
                    <input type="number"
                            value={amount} 
                            id="amount" 
                            onChange={(e)=> setAmount(e.target.value)}
                            placeholder="Enter amount"/>
                </div>
                <p><i>- for expense</i></p>
                <Button type='submit' variant="contained" color="primary" disabled={!amount || !detail}>Add transaction</Button>
            </form>
        </div>
    )
}
