import uuid from 'uuid'
import database from '../firbase/firebase'
export const addExpense = ({
    description = "",
    note = "",
    amount = "",
    createdAt = "",
    id=""
} = {}) => ({
    type: "ADD",
    expense: {
        id,
        description,
        note,
        amount,
        createdAt
    }
})

export const addFunction=(expenseData={})=>{
    let {
        description = "",
        note = "",
        amount = "",
        createdAt = ""
    
    }=expenseData
   const expense= {
            description,
            note,
            amount,
            createdAt
            
    }
    return (dispatch)=>{
        database.ref("notes").push({
            expense
        }).then((ref)=>{
           
                dispatch(addExpense({ ...expense, id: ref.key }))
        }).catch((e)=>{console.log('didnt work =>>>',e);
        })
    }
}

export const editExpense = (id, update) => ({
    type: "EDIT",
    id,
    update
})



export const removeExpense = ({
    id = 0
} = {}) => ({
    type: "RMV",
    id
})

export const RemoveFromDatabase=({id})=>{
    console.log("id",id)
    return (dispatch) =>{
        console.log(`notes/${id}`);
        
        database.ref(`notes/${id}`).set(null).then(()=>{
            console.log("Removed from database")
            dispatch(removeExpense({id}))
        })
    }
}