/* eslint-disable prettier/prettier */
import axios from "axios";
import { config, headers } from "./config";
const axiosInstance = axios.create({ baseURL: config.base_url });

const getUser = async (url = '', body = {}) => {
    var data = JSON.stringify(body);
    var config = {
        method: 'post',
        url,
        headers,
        data: data
    };
    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    }
    catch (Err) {
        console.log(Err)
    }

};
async function createUser(url = '', body = {}) {
    var data = JSON.stringify(body);
    var config = {
        method: 'post',
        url: url,
        headers,
        data: data
    };
    try {
        const response = await axios(config)
        return JSON.stringify(response.data);

    }
    catch (err) {
        console.log(err)
    }


}

export {
    getUser,
    createUser
}