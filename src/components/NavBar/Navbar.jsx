import React from 'react'
import "./navbar.scss"

export const Navbar = () => {
  return (
    <nav className="container">
        <header>

            <div className="nav container">
                
                <a href="/" class="logo"> Sutsiki </a>
            
                <ul className="navbar">
                    <li><a href="/Works" class="nav-link"> Works </a></li>
                    <li><a href="#" class="nav-link"> Posts </a></li>
                    <li><a href="#" class="nav-link"> Source </a></li>
                </ul>
            
                <div className="menu-icon">
            
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
            
                </div>
        

            </div>
        
        </header>
        
    </nav>

  )
}
