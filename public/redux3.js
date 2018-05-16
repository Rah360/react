import {combineReducers, createStore} from 'redux'

//reducer
const studentReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD": return [...state ,action.update]
        case "EDIT": return state.map((x)=>x.collegeName===action.collegeName?{...x,...action.edit}:x)
        default: return state
    }
}

const infoReducer=(state={},action)=>{
    switch(action.type)
    {
        case "ADDINFO": return {...state ,...action.update}
        case "EDITINFO": return {...state,...action.edit}
        default: return state
    }
}
//store
const store = createStore(combineReducers({student:studentReducer,info:infoReducer}))
//subscribe 
store.subscribe(() => {
    console.log(store.getState());
})
//action creator function
const add=({collegeName="",stream="",grade=""}={})=>({
    type:"ADD",
    update:{
        collegeName,
        stream,
        grade
    }
})

const edit=(collegeName,edit)=>({
    type:"EDIT",
    collegeName,
    edit
})

const addInfo=({city='mumbai',age=18,name='unknown'}={})=>({
    type:"ADDINFO",
    update:{
        name,
        age,
        city
    }
})

const editInfo=(name,edit)=>({
    type :"EDITINFO",
    edit
})
//dispatcher
store.dispatch(add({collegeName:"ruia",stream:"cs","grade":"A"}))
store.dispatch(add({collegeName:"ruparel",stream:"cs","grade":"B"}))
store.dispatch(edit("ruia",{stream:"computer science"}))
store.dispatch(addInfo({city:"mumbai",age:21,name:"rahul"}))
store.dispatch(editInfo("rahul",{age:22}))




