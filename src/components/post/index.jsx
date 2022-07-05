import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Post({post}) {
    return (
        <div className="post-container">
            <div className="post-image">
                <img src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="imagem" />
            </div>
            <div>
            <Link className="navlink" to="#"><p className="post-date">{post.date}</p></Link>
            <Link className="navlink" to="#"> <p className="post-title">{post.title} </p></Link>
            <Link className="navlink" to="#"><p className="post-description">{post.description}</p></Link>
            </div>
        </div>
    )
};