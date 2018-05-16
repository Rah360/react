import React from 'react'
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import Create from './Create'
import Help from './Help'
import Dashboardpage from './Dashboardpage'
import Edit from './Edit'

const Header =()=>(
            <div> 
            <h1>EXPENSIFY</h1>
            <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">CREATE</NavLink>
            <NavLink to="/help">help</NavLink>
            </div>
         </div>
)
const Routes=()=>(
    <BrowserRouter>
        <div>
            <Header/>
                <Switch>
                    <Route path="/" component={Dashboardpage} exact={true}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/edit/:id" component={Edit}/>
                    
                </Switch>
         </div>
    </BrowserRouter>
)
export default Routes
