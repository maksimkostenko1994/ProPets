import { $authHost } from "./api";

export const getPosts = async (page, limit) => {
    try {
        const { data } = await $authHost.get(`/api/posts/?page=${page}&limit=${limit}`);
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};

export const getPost = async (id, page, limit) => {
    try {
        const { data } = await $authHost.get(`/api/posts/${id}?page=${page}&limit=${limit}`);
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};
export const addNewPost = async (post) => {
    try {
        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("text", post.text);
        formData.append("photo", post.photo[0]);
        formData.append("userId", post.userId);
        const { data } = await $authHost.post(`/api/posts/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};
