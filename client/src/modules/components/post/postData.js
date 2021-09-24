export const getPosts = () => {
    return JSON.parse(localStorage.getItem('posts'))
}
export const setPostsToLocalStorage = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts))
}