import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'
import visibleExpense from "../selectors/expense";
import {setText} from '../action/filter'

const expenseList=(props)=>(
    <div>
        <input type="text" placeholder="search bills here!" onChange={(e)=>{
            props.dispatch(setText(e.target.value))
        }}/>
        {props.expense.map(x=>{return <ListItem key={x.id} {...x}/>})}
    </div>
)

const mapStateToProps=(state)=>{
    // console.log("uuu",state)
    return {
        expense: visibleExpense(state.expenses, state.filter),
        filter:state.filter
    }
}

export default connect(mapStateToProps)(expenseList)