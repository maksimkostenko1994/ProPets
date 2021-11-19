import {$authHost} from "./api";

export const getPets = async status => {
    try {
        const {data} = await $authHost.get(`/api/pets/${status}`)
        return data
    } catch (e) {
        return await Promise.reject(e.response.data.message)
    }
}

export const addNewLostPost = async (post) => {
    console.log("post from api", post);
    try {
        const formData = new FormData();
        formData.append("status", post.status);
        formData.append("nick", post.nick);
        formData.append("type", post.type);
        formData.append("image", post.image[0]);
        formData.append("sex", post.sex);
        formData.append("breed", post.breed);
        formData.append("color", post.color);
        formData.append("height", post.height);
        formData.append("distinctive", post.distinctive);
        formData.append("description", post.description);
        formData.append("location", post.location);
        formData.append("phone", post.phone);
        formData.append("email", post.email);
        const {data} = await $authHost.post(`/api/pets/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (e) {
        return await Promise.reject(e);
    }
};

export const getOnePet = async (id) => {
    try {
        const {data} = await $authHost.get(`api/pets/id/${id}`);
        return data;
    } catch (e) {
        return await Promise.reject(e.response.data.message);
    }
};

export const addFoundPet = async pet => {
    try {
        const formData = new FormData()
        formData.append("type", pet.type)
        formData.append("sex", pet.sex)
        formData.append("breed", pet.breed)
        formData.append("color", pet.color)
        formData.append("height", pet.height)
        formData.append("features", pet.features)
        formData.append("description", pet.description)
        formData.append("image", pet.image[0])
        formData.append("location", pet.location)
        formData.append("contacts", pet.contacts)
        formData.append("userId", pet.userId)
        formData.append("status", pet.status)
        const {data} = $authHost.post(`/api/pets`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return data
    } catch (e) {
        return await Promise.reject(e.response.data.message)
    }
}