import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav n1="Home" n2="Usuário" n3="Pedidos" n4="Empresas" n5="Cadastrar Usuário" n6="Cadastrar Empresas" />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>