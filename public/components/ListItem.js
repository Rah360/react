import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {removeExpense,RemoveFromDatabase} from '../action/expense'
const ListItem = ({
           dispatch,
        id,
        description,
        amount,
        createdAt
    }) => (
    <div>
        <Link to={`/edit/${id}`}><h4>{description}</h4></Link>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <button  onClick={e=>{
            
            dispatch(RemoveFromDatabase({id}))
        }}> remove </button>
    </div>
)

export default connect()(ListItem)