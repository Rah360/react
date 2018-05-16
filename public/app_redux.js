import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Final from './components/Final'

import store from './store/store'
import {addExpense} from './action/expense'
import {setText} from './action/filter'
import visibleExpense from "./selectors/expense";


const configStore=store()
configStore.dispatch(addExpense({
    description: "water bill",
    "amount": 200,
    note: "pay the water bill",
    createdAt: 1200
}))
configStore.dispatch(addExpense({
    description: "gas bill",
    "amount": 150,
    note: "pay the gas bill",
    createdAt: 1300
}))

configStore.dispatch(setText("gas"))
const state = configStore.getState()
console.log(visibleExpense(state.expenses, state.filter))

const jsx=(
    <Provider store={configStore}>
        <Final/>
    </Provider>
)

// console.log(configStore.getState())
ReactDOM.render(jsx,document.getElementById("root"))