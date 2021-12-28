/* eslint-disable prettier/prettier */
import axios from "axios";
import { headers } from "./config";

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
        headers: headers,
        data: data
    };
    try {
        const res = await axios(config);
        console.log(JSON.stringify(res.data))
    } catch (Err) {
        console.log(Err)
    }
}

export {
    getUser,
    createUser
}