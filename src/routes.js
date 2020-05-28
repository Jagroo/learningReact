import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Info from './components/Info'
import AddUser from './components/AddUser'
import AltInfo from './components/AltInfo'
import Form from './components/Form'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/info' component={Info}/>
        <Route path='/addUser' component={AddUser}/>
        <Route path='/altInfo' component={AltInfo}/>
        <Route path='/form' component={Form}/>
    </Switch>
)