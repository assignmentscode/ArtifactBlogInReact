import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header>
            <nav className="content-width">
                <p>The Artifact</p>
                <p className="heading-content">Culture & Art blog</p>
                <ul> 
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
            </nav>
        </header>
        );
  }
}

export default Header;