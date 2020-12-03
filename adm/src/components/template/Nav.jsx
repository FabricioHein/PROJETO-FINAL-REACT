import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        
        <nav className="menu">

            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> {props.n1}
            </Link>
            <Link to="/usershow">
                <i className="fa fa-users"></i> {props.n2}
            </Link>
            <Link to="/pedidosshow">
                <i className="fa fa-money"></i> {props.n3}
            </Link>
            <Link to="/companiesshow">
                <i className="fa fa-suitcase"></i> {props.n4}
            </Link>
            <Link to="/usercreate">
                <i className="fa fa-user"></i> {props.n5}
            </Link>
            <Link to="/companiescrud">
                <i className="fa fa-suitcase"></i> {props.n6}
            </Link>
        </nav>
    </aside>