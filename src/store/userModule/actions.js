import userService from "@/services/UserService";

const actions = {
    async getUserList({commit}) {
        try {
            const {data} = await userService.userList();
            console.log('pp', data)
            commit('SET_DATA_LIST_USER', data)
        } catch (error) {
            console.log(error);
        }
    },
    async getTodo({commit}, id) {
        try {
            const {data} = await userService.todoList(id);
            console.log('pp', data)
            commit('SELECT_TODO', data)
        } catch (error) {
            console.log(error);
        }
    },


}
export default actions;
