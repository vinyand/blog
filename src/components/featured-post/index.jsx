import React from "react";
import "./style.css";
import Author from "../../components/author-badge"
import { Link } from "react-router-dom";

export default function FeaturedPost({post}) {
    return (
        <div className="featured-post-container">
            <div className="featured-post-image">
                <img src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="imagem" />
            </div>
            <div>
                <Link className="link" to="#"><p className="postt-date">{post ?.date}2</p></Link>
                <Link className="link" to="#"> <h2 className="postt-title">{post.title}</h2></Link>
                <Link className="link" to="#"> <p className="postt-description">{post.description}</p></Link>
                 
                <Author/>
            </div>
        </div>
    )
};