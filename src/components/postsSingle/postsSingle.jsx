// import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './postOne.scss'
export const PostSingle = () =>{
    const postId = useParams();
    const [posts, setPosts] =useState({});
    useEffect(() =>{
        fetch(process.env.REACT_APP_URL + '/posts/' + postId.postId)
        .then(response => response.json())
        .then(data => setPosts(data))
       }, [postId]);
    return ( <>
        <div className="one__div">
            <p className="one__user">User interface</p>
            <h3 className="one__title">{posts.title}</h3>
                   <p className="one__user">October 24, 2020  3 minutes read</p>
            <img src="https://picsum.photos/200" alt="img" width="670" height="352" />

        <p className="one__body">{posts.body}</p>     
        </div>
    </>)
}