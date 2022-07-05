import React from "react";
import "./style.css";
import profileImage from "../../assets/imagens/perfil.png";

export default function Navbar() {
    return (
        <div className="author-badge-container">
            <img className="author-badge-img" src={profileImage} />
            <div>
                <h3>Vinyand</h3>
                <p>Tech Lead</p>
            </div>
        </div>
    );
}