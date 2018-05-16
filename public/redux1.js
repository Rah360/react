import {createStore} from 'redux'

const store=createStore((state={c:1},action)=>{
    switch(action.type){
        case "ADD":
            return {c:state.c+action.addBy}
        case "SUB":
            return {c:state.c-action.subBy}
        default:
            return state
    }
})

store.subscribe(()=>{
    console.log(store.getState())
})

const add=({addBy=1}={})=>({
    type:"ADD",
    addBy
})
store.dispatch(add({addBy:5}))