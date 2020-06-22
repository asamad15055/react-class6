import React, { createContext, useReducer } from "react" ;
import TransactionReducer from './transreducer' ;

const initialtrans = [
    
]

export const TransactionContext = createContext(initialtrans) ;

export const TransactionProvider = ({children})=> {
    
    let [state,dispatch] = useReducer(TransactionReducer,initialtrans);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount ,
                desc: transObj.desc 
            },
        })
    }


    return(
        <TransactionContext.Provider value= {{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>

    )

}