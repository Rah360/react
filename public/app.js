import React from 'react'
import ReactDOM from 'react-dom'

const Header =()=> (
    <div>
        <h1>HI Manager </h1>
        <p>Add Team Info</p>
    </div>
)
class  TeamInfo extends React.Component{
    render()
    {
        return (
            <form>
                <input type="text" name="tm" placeholder="enter team name" />
                <input type="text" name="mem" placeholder="enter players"/> 
            </form>
        )
    }
}
class Detail extends React.Component{
    render()
    {
        <div>
            <p>Name of Team:{this.props.showTeam}</p>
    
        </div>
    }
}