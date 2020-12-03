import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/Crud/UserCrud'
import PedidosCrud from '../components/Crud/PedidosCrud'
import UserShow from '../components/Crud/UserShow'


export default props => 
    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/pedidoscreate' component={PedidosCrud} />

        <Route path='/usershow' component={UserShow} />
      
      
        <Redirect from='*' to='/' />
    </Switch>