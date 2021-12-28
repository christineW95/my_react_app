const config = {
    base_url: 'https://api-nodejs-todolist.herokuapp.com',
    user: '/user',
    user_login: '/user/login',
    user_register: '/user/register',
    add_task: '/task',
    delete_task: `/task`

}
const headers = {
    "Content-Type": "application/json",
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY'
}

export {
    config,
    headers
}