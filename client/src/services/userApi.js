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
        return jwtDecode(data.token);
    } catch (e) {
        return await Promise.reject(e);
    }
};

export const login = async ({ email, password }) => {
    try {
        const { data } = await $host.post(`/api/users/login`, {
            email,
            password,
        });
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    } catch (e) {
        return await Promise.reject(e);
    }
};

export const check = async () => {
    try {
        const { data } = await $authHost.get(`/api/users/auth`);
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    } catch (e) {
        return await Promise.reject(e);
    }
};

export const getCurrentUser = () => {
    return localStorage.getItem("token")
        ? jwtDecode(localStorage.getItem("token"))
        : null;
};

export const getUserData = async (id) => {
    try {
        const { data } = await $authHost.get(`/api/users/${id}`);
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
export const updateUser = async ({ id, ...rest }) => {
    try {
        const { data } = await $authHost.put(`/api/users/${id}`, { ...rest });
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};
