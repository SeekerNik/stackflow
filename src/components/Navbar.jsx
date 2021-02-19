import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <a href="#home">StackFlow</a>
            <a href="#product">Product</a>
            <input type="text" placeholder="Search..."/>
            <ul>
                <li>icon1</li>
                <li>icon2</li>
                <li>icon3</li>
                <li>icon4</li>
            </ul>
            
        </div>
    )
}

export default Navbar
