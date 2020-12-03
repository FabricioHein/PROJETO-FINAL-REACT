import './Menu.css'
import company from '../../assets/imgs/company.png'
import user from '../../assets/imgs/user.png'
import fornecedores from '../../assets/imgs/fornecedores.png'

import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu">
        
        <Link to="/usershow" className="menu">
            <img src={user} alt="menu" />
            <p className="mb-0">Consultar Usuários</p>
        </Link>
        <Link to="/companiesshow" className="menu">
            <img src={company} alt="menu" />
            <p className="mb-0">Consultar Empresas</p>
        </Link>
        <Link to="/pedidosshow" className="menu">
            <img src={fornecedores} alt="menu" />
            <p className="mb-0">Consultar Pedidos</p>
        </Link>
    </aside>