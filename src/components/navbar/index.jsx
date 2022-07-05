import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
              <Link className="logo" to="/">
                <h3>Meu blog</h3>
              </Link>
            </div>
            <div>
              
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-linka" to="/post">Sobre</Link>
                <Link className="nav-link" to="/contact">Contato</Link>
                <Link className="nav-link" to="/culture">Cultura</Link>
            </div>
        </nav>
    )
};