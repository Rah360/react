import expenseReducer from '../reducer/expense';
import filterReducer from '../reducer/filter';

import {createStore,combineReducers} from 'redux'
export default ()=>{

    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer
        }),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}