import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpense} from '../action/expense'
const Create =(props)=>(
    <div>
        <h1>Create Expense Page</h1>
        <ExpenseForm onSubmit={(p)=>{
        props.dispatch(addExpense(p))
        props.history.push("/")
        }}/>
    </div>
)
export default connect()(Create)