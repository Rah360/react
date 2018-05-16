import React from 'react'
import  ReactDOM from 'react-dom'

const players = [{
    name: "ronaldo",
    "team": "real madrid"
}, {
    name: "marcelo",
    "team": "real madrid"
}, {
    name: "ramos",
    "team": "real madrid"
}, {
    name: "messi",
    "team": "barcelona"
}, {
    name: "iniesta",
    "team": "barcelona"
}, {
    name: "pique",
    "team": "barcelona"
} ]

const Hof=(BaseElement)=>({list,team})=>{
    console.log(list)
    const Nprops=list.filter(x=>x.team===team)
    console.log(Nprops)
    return <BaseElement list={Nprops}/>
}
const ListRender=({list})=>
    <div>
        {list.map(x=><li key={x.name}>{x.name}</li>)}
    </div>
const NewList = Hof(ListRender)

//new 
const Auth=(props)=>(
    <p>{props.msg}</p>
)

const RequireAuth=(BaseElement)=>(props)=>{
    return (<div>
        {props.isAuth && <p>my fav team is::</p>}
        <BaseElement {...props} />   
    </div>
    )
}

const Gama=RequireAuth(Auth)
// ReactDOM.render(<NewList list={players} team={"real madrid"} />,document.getElementById("root"))
ReactDOM.render(<Gama isAuth={true} msg={"real madrid"} />, document.getElementById("root"))
