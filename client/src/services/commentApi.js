import { $authHost } from "./api";

export const getComments = async () => {
    try {
        const { data } = await $authHost.get(`/api/comments/`);
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
export const addNewComment = async (comment) => {
    try {
        const formData = new FormData();
        formData.append("userId", comment.userId);
        formData.append("postId", comment.postId);
        formData.append("text", comment.text);
        const { data } = await $authHost.post("/api/comments", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
