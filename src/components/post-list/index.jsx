import React from "react"
import Post from "../../components/post"
import "./style.css";

export default function PostList({ posts }) {
    return (
        <div className="post-list-container">
            {posts &&
                posts.map(post => {
                    return <Post post={post.attributes}/>;
                })
            }
        </div>
    )
};