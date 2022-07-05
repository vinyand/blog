import React from "react";
import "./style.css";
import Author from "../author-badge"
import { Link } from "react-router-dom";

export default function FeaturedPost({post}) {
    return (
        <div className="post-container">
            <div className="post-image">
            <Link className="link" to="#"><img src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="imagem" /></Link>
            </div>
            <div>
            <Link className="link" to="#"><p className="post-date">{post.date}</p></Link>
            <Link className="link" to="#"><h2 className="post-title">{post.title}</h2></Link>
            <Link className="link" to="#"><p className="post-description">{post.description}</p></Link>
                
                <Author/>
            </div>
        </div>
    )
};