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
            <Link to="/users">
                <i className="fa fa-users"></i> {props.n2}
            </Link>
            <Link to="/pedidoscreate">
                <i className="fa fa-shopping-cart"></i> {props.n3}
            </Link>
            
        </nav>
    </aside>