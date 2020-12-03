import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserShow from '../components/Crud/UserShow'
import UserCrud from '../components/Crud/UserCrud'
import PedidosShow from '../components/Crud/PedidosShow'
import Companieshow from '../components/Crud/CompaniesShow'
import CompanyCrud from '../components/Crud/CompanyCrud'


export default props => 
    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/usershow' component={UserShow} />
        <Route path='/usercreate' component={UserCrud} />

        <Route path='/pedidosshow' component={PedidosShow} />
        <Route path='/companiesshow' component={Companieshow} />
        <Route path='/companiescrud' component={CompanyCrud} />

        <Redirect from='*' to='/' />
    </Switch>