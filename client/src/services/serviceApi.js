import {$authHost} from "./api";

export const getServices = async type => {
    try {
        const {data} = await $authHost(`/api/services/${type}`)
        return data
    } catch (e) {
        return Promise.reject(e.message)
    }
}