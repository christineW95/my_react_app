import axios from "axios";
import { headers } from "./config";
async function getAllTasks(url) {
    var config = {
        method: 'get',
        url: url,
        headers: headers,
    };
    try {
        const res = await axios(config);
        console.log(JSON.stringify(res.data))
    }
    catch (err) {
        console.log(err)

    }

}
async function addTask(url, task) {
    var data = JSON.stringify(task);

    var config = {
        method: 'get',
        url: url,
        headers: headers,
        data: data
    };
    try {
        const res = await axios(config);
        console.log(JSON.stringify(res.data))
    }
    catch (err) {
        console.log(err)

    }


}

async function editTask(url, task) {
    var data = JSON.stringify(task);

    var config = {
        method: 'put',
        url: url,
        headers: headers,
        data: data
    };
    try {
        const res = await axios(config);
        console.log(JSON.stringify(res.data))
    }
    catch (err) {
        console.log(err)

    }

}

async function deleteTask(url) {
    var config = {
        method: 'delete',
        url: url,
        headers: headers,

    };
    try {
        const res = await axios(config);
        console.log(JSON.stringify(res.data))
    }
    catch (err) {
        console.log(err)

    }

}

export {
    addTask,
    editTask,
    deleteTask,
    getAllTasks
}
