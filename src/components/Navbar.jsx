import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({userName, userRole, onLogout}) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    חנות טבעית
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">בית</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">מוצרים</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">עגלה</Link>
                    </li>
                
                </ul>
            </div>
            <div className="user-info">
                <span>שלום {userName} ({userRole})</span>
                <button onClick={onLogout}>התנתק</button>
            </div>
        </nav>
    )
}

export default Navbar