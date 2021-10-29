import {$host, $authHost} from "./api";
import jwtDecode from "jwt-decode"

export const registration = async ({name, email, password}) => {
    try {
        const {data} = await $host.post(`/api/users/registration`, {full_name: name, email, password, role: 'USER'})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        return await Promise.reject(e)
    }
}

export const login = async ({email, password}) => {
    try {
        const {data} = await $host.post(`/api/users/login`, {email, password})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        return await Promise.reject(e)
    }
}

export const check = async () => {
    try {
        const {data} = await $authHost.get(`/api/users/auth`)
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    }catch (e) {
        return await Promise.reject(e)
    }
}