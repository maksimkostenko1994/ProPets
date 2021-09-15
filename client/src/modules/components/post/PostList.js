import Post from "./Post";
export default function PostList({ posts }) {
    return (
        <div>
            {posts.map(el=>
                <Post
                key={el.id}
                post={el}
                />)}
        </div>
    )
}