import apiClient from "@/plugins/Axios";

const userList = function () {
    return apiClient.get(`/users`);
}

const todoList = function (id) {
    return apiClient.get(`/todos?userId=${id}`);
}
export default {
    userList,
    todoList
}
