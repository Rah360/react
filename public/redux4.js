import {createStore,combineReducers} from 'redux'

//reducers 

const playerReducer=(state=[],action)=>{
    switch(action.type)
    {
        case "ADD": return [...state,action.update]
        case "ADDGOAL": return state.map((x)=>{
            if(x.name==action.name && x.hasOwnProperty(action.comp))
            {
                x[action.comp]=x[action.comp]+action.goal
                return x
            }
            else
            {
                return x
            }
        })
        default: return state
    }
}
const filterReducer=(state={},action)=>{
     switch (action.type) {
         default: return state
     }
}

//store 
const store=createStore(combineReducers({
    player:playerReducer,
    filter:filterReducer
}))

store.subscribe(()=>{
    console.log(store.getState());
})

//action creator function

const addInfo=({name="unknown",age=21,country="unknown",LLgoal=0,uclGoal=0}={})=>({
    type:"ADD",
    update:{
        name,
        age,
        country,
        LLgoal,
        uclGoal,
        totalGoal:LLgoal+uclGoal
    }
})
const addGoal=(name,{comp,goal})=>({
    type:"ADDGOAL",
        name,comp,goal
    
})

//dispatch

store.dispatch(addInfo({name:"rahul",age:21,country:"india",LLgoal:22,uclGoal:22}))
store.dispatch(addInfo({name:"rahan",age:21,country:"isreal",LLgoal:11,uclGoal:20}))
store.dispatch(addInfo({name:"akshay",age:22,country:"uk",LLgoal:9,uclGoal:9}))
store.dispatch(addGoal("rahan",{comp:"LLgoal",goal:5}))


