import {$authHost} from "./api";

export const getServices = async type => {
    try {
        const {data} = await $authHost.get(`/api/services/${type}`)
        return data
    } catch (e) {
        return Promise.reject(e.response.data.message)
    }
}

export const addService = async service => {
    try {
        const formData = new FormData()
        formData.append("title", service.title)
        formData.append("type", service.type)
        formData.append("text", service.text)
        formData.append("photo", service.photo[0])
        const {data} = await $authHost.post(`/api/services`)
    }catch (e) {
        return Promise.reject(e.response.data.message)
    }

}