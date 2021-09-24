import React, { useState } from "react";
import PostFullInfo from "./../post/PostFullInfo";
import PostList from "./../post/PostList";
import getPosts from "./../post/store";
import { setPostsToLocalStorage } from "./postData";

export const PostContext = React.createContext();
function Content(){
    const [posts, setPosts] = useState(getPosts());
    const [currentPost, setCurrentPost] = useState(null)
    const [comments, setComments] = useState('')
    
    const changeCurrentPost = (id) =>{
        const index = posts.findIndex(post => post.id === id)
        const post = {...posts[index]};
        setCurrentPost(post)
    }
    const addEvolution = (id, key) => {
        const newPosts = [...posts];
        const index = posts.findIndex(post => post.id === id)
        newPosts[index][key]++
        setPosts(newPosts)
        setPostsToLocalStorage(newPosts)
    }
    const addComment = (author,commentText) => {
        const newComments = [...comments];
        
    }
        
        return (
            <PostContext.Provider value={{
                changeCurrentPost,
                addEvolution
        }}>
        <div id='content'>
        <div className='left'></div>
                    <div className='center'>{currentPost ?
                        <PostFullInfo post={currentPost}/>:
                        <PostList posts={posts} />}</div>
        <div className='right'></div>
                </div>
                </PostContext.Provider>
            )    
}
export default Content;