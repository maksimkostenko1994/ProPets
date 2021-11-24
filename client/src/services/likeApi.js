import {$authHost} from "./api";

export const getLikes = async () => {
    try {
        const {data} = await $authHost.get(`/api/likes`);
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};

export const addNewLike = async (postId, userId) => {
    try {
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("postId", postId);
        const {data} = await $authHost.post(`/api/likes/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};
export const addNewDislike = async (like) => {
    try {
        const {data} = await $authHost.delete(`/api/likes/`, {data: {...like}});
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};
