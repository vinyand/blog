import React from "react"
import FeaturedPost from "../../components/featured-post"
import PostList from "../../components/post-list"
import { useState} from "react";
import { useEffect } from "react";

const mock = [
        {
            image:"https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog-1920x1024.png",
            date:"4 de julho, 2022",
            title:"tituto test",
            description:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",
        },
        {
            image:"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
            date:"4 de julho, 2022",
            title:"teste",
            description:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzAugZAcgaV6QrWXdHz6UQdvm4d9WSQIUNw&usqp=CAU",
            date:"4 de julho, 2022",
            title:"teste",
            description:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",
        }
    ];

export default function Home() {

const [posts, setPosts] = useState();
   
async function getPosts(){
    const response = await fetch("https://cms-blog-tutorial.herokuapp.com/api/posts?populate=*");
    const data = await response.json(); //tb é uma promisse "promessa"

    setPosts(data.data);
}

useEffect(() =>{
    getPosts();
    }, [])

    return (
        <div>
           {
            posts && posts.length > 0 && <FeaturedPost post={posts[0].attributes}/>
           }
            <PostList posts={posts}/>
        </div>
    )
};