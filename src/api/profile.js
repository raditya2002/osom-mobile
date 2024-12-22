import axios from 'axios'

const api = axios.create({
    baseURL: 'http://rofif.my.id/api/v1'
})


export const restGetUser = async (token) => {
    try {
        const response = await api.get('/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (e) {
        throw new Error('Failed to get Data: ' + e.message)
    }
}

export const restUpdateAva = async (token, userData) => {
    try {
        const response = await api.put('/users', userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (e) {
        throw new Error('Failed to Update Ava: ' + e.message)
    }
}


