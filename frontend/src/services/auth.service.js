import axios from "axios"

const baseURL = 'http://localhost:3000'

export const postRegister = async(data)=>{
    try {
       const response = await axios.post(`${baseURL}/register`, data)
        return response.data
    } catch (error) {
         throw error.response?.data || error.message;
    }

}



