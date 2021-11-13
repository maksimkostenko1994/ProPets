import {$authHost} from "./api";

export const getServices = async type => {
    try {
        const {data} = await $authHost.get(`/api/services/${type}`)
        return data
    } catch (e) {
        return await Promise.reject(e.response.data.message)
    }
}

export const addService = async service => {
    try {
        console.log(new Date(`${service.date} ${service.dateTime}:00`))
        const formData = new FormData()
        formData.append("title", service.title)
        formData.append("type", service.type)
        formData.append("text", typeof service.text === "object" ? JSON.stringify(service.text) : service.text)
        formData.append("photo", service.photo[0])
        formData.append("contacts", service.contacts)
        formData.append("date", service.date ? `${new Date(`${service.date} ${service.dateTime}:00`)}` : `${new Date()}`)
        formData.append("location", service.location)
        formData.append("userId", service.userId)
        const {data} = await $authHost.post(`/api/services`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return data
    } catch (e) {
        return await Promise.reject(e.response.data.message)
    }

}