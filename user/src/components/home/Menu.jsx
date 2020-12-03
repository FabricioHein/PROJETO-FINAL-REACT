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
            <p className="mb-0">Consultar Usuário</p>
        </Link>
        <Link to="/companysshow" className="menu">
            <img src={company} alt="menu" />
            <p className="mb-0">Consultar Empresa</p>
        </Link>
        <Link to="/providershow" className="menu">
            <img src={fornecedores} alt="menu" />
            <p className="mb-0">Consultar Fornecedores</p>
        </Link>
    </aside>