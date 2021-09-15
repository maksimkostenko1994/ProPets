import React from "react";
import PostFullInfo from "./../post/PostFullInfo";
import PostList from "./../post/PostList";
import getPosts from "./../post/store";

export const PostContext = React.createContext();

export default class Content extends React.Component{
    state = {
        posts: getPosts(),
        currentPost: null,
        comments:''
    }
    changeCurrentPost = (id) =>{
        const posts = this.state.posts
        const index = posts.findIndex(post => post.id === id)
        const post = {...posts[index]};
        this.setState({...this.state, currentPost: post})
    }
    showPosts = ()=>{
        this.setState({...this.state, currentPost: null})
    }


    render() {
        return (
            <PostContext.Provider value={{
            changeCurrentPost: this.changeCurrentPost
        }}>
        <div id='content'>
        <div className='left'></div>
                    <div className='center'>{this.state.currentPost ?
                        <PostFullInfo post={this.state.currentPost}/>:
                        <PostList posts={this.state.posts} />}</div>
        <div className='right'></div>
                </div>
                </PostContext.Provider>
            )    
}
}