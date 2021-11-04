import { $authHost } from "./api";

export const getPosts = async () => {
    try {
        const { data } = await $authHost.get(`/api/posts`);
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
