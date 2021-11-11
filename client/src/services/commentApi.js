import { $authHost } from "./api";

export const getComments = async () => {
    try {
        const { data } = await $authHost.get(`/api/comments/`);
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
export const addNewComment = async (formData) => {
    try {
        const { data } = await $authHost.post("/api/comments", formData);
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
