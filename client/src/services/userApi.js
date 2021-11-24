import { $host, $authHost } from "./api";
import jwtDecode from "jwt-decode";

export const registration = async ({ name, email, password }) => {
    try {
        const { data } = await $host.post(`/api/users/registration`, {
            full_name: name,
            email,
            password,
            role: "USER",
        });
        localStorage.setItem("token", data.token);
        return data.user;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};

export const login = async ({ email, password }) => {
    try {
        const response = await $host.post(`/api/users/login`, {
            email,
            password,
        });
        localStorage.setItem("token", response.data.token);
        return response;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};

export const check = async () => {
    try {
        const { data } = await $authHost.get(`/api/users/auth`);
        localStorage.setItem("token", data.token);
        return { token: jwtDecode(data.token), user: data.user };
    } catch (e) {
        if (e.response.status === 401) localStorage.removeItem("token");
        return await Promise.reject(e.response);
    }
};

export const getCurrentUser = () => {
    return localStorage.getItem("token")
        ? jwtDecode(localStorage.getItem("token"))
        : null;
};

export const getUser = async (id) => {
    try {
        const { data } = await $authHost.get(`/api/users/${id}`);
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};

export const updateUser = async ({ id, full_name, ...rest }) => {
    try {
        const formData = new FormData();
        formData.append("full_name", full_name);
        formData.append("avatar", rest.avatar && rest.avatar[0]);
        formData.append("email", rest.email);
        formData.append("phone", rest.phone);
        formData.append("user_pet", rest.user_pet);
        formData.append("nick", rest.nick);
        formData.append("pet_photo", rest.pet_photo && rest.pet_photo[0]);
        const { data } = await $authHost.put(`/api/users/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (e) {
        return await Promise.reject(e.response);
    }
};
