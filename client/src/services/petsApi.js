import { $authHost } from "./api";

export const getAllPets = async () => {
    try {
        const { data } = await $authHost.get(`/api/pets`);
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
