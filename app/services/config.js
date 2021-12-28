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
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNiNDRkNDU2ZGRjOTAwMTc4MDlkNDYiLCJpYXQiOjE2NDA3MTEzODB9.gxogH1elcepZeJ3FEzdyMpkz4Sb6lkk_G49IH2y_gu0'
}

export {
    config,
    headers
}