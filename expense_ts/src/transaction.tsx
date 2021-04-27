import React from 'react'
import { useContext } from 'react'
import { GetContext } from './GetContext';
import './Transaction.css'
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import {transactionType} from './AddTransaction'

const useStyles = makeStyles((theme) => ({
    root: {
        
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
        marginBottom:1.5,
       
    },


}));

type CardProps = {
    details: transactionType,
  }


const Transaction: React.FunctionComponent<CardProps> = ({ details })=>{

    const {del_transaction} = useContext(GetContext);
    
    function handleOnClick(id:number) {
        del_transaction(id)
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SnackbarContent style={{
                color: details.amount>0 ? 'green' : 'red'
                }} 
                message={details.detail} 
                action={<Button onClick={() => handleOnClick(details.id)} 
                color='inherit' size="small">
                X
             </Button>} />

        </div>
    )
}

export default Transaction
