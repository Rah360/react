import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'

const expenseReducer=(state=[],action)=>{
    switch(action.type)
    {
        case "ADD":
            return [...state,action.expense]
        case "RMV":
            return state.filter((id)=> {
               return id.id !==action.id
            })
        case "EDIT":
            return state.map((x)=>{
                if(x.id==action.id)
                {
                    return {
                        ...x,...action.update
                    }
                }
                else
                {
                    return x
                }
            })
        default:
            return state
    }
}
const filterReducer=(state={
 text:"",
 sortBy:"date",
 startDate:undefined,
 endDate:undefined   
},action)=>{
    switch(action.type)
    {
        case "ADDFILTER":
            return {...state,...action.update}
        case "SETTEXT":
            return {...state,text:action.text}
        case "SORTBYAMOUNT":
            return {...state,sortBy:action.sortBy}
        default:
            return state

    }
}


const getVisibleExpenses=(expense,{text,startDate,endDate})=>{
    console.log(expense)
   return expense.filter((x)=>{
        const start=startDate <= x.createdAt
        const end=endDate >=x.createdAt
        const textMatch= x.description.includes(text)
        console.log(start ,end ,text);
        return start && end && text
        
    })
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
)
store.subscribe(() => {
    // console.log(store.getState())
   const state=store.getState()
//    console.log(state.expense);
   
   console.log(getVisibleExpenses(state.expenses,state.filter))
})


const addExpense=({description="",note="",amount="",createdAt=""}={})=>({
    type:"ADD",
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const editExpense=(id,update)=>({
    type:"EDIT",
    id,
    update
})


const removeExpense = ({id=0 } = {}) => ({
    type: "RMV",
    id
})

const addFilter=({text="",sortBy="date",amount=500,startDate=1200,endDate=1900}={})=>(
    {
        type:"ADDFILTER",
        update:{
            text,
            sortBy,
            amount,
            startDate,
            endDate
        }
    }
)

const setText=(text="")=>({
    type:"SETTEXT",
    text
})
const sortByAmount=()=>({
    type:"SORTBYAMOUNT",
    sortBy:"amount"
})
const e1=store.dispatch(addExpense({description:"rent","amount":1000,note:"pay the rent",createdAt:1200}))
const e2=store.dispatch(addExpense({ description: "coffe", "amount": 50,note:"i thought you like tea",createdAt:2000 }))
store.dispatch(editExpense(e2.expense.id,{amount:30}))
// store.dispatch(removeExpense({id:e2.expense.id}))
store.dispatch(addFilter({text:"firstfilter",amount:1000}))
store.dispatch(setText("Filtering"))
store.dispatch(sortByAmount())

