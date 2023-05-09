import axios from 'axios';

const BASE_URL = 'https://64411770792fe886a89e1645.mockapi.io';

export const getUsers = async (page) => {
    const {data} = await axios.get(`${BASE_URL}/user?limit=3&page=${page}`)
    return data;
 
}