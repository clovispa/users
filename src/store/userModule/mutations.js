const mutations = {
    SET_DATA_LIST_USER(state, payload) {
        state.userState = payload;
    },
    SELECT_TODO(state, payload) {
        state.userTodo = payload;
    },
    ADD_USER(state, payload) {
        state.adduser = payload;
    },
    ACCESS_USER(state, payload) {
        state.userValidate = payload;
    },
}
export default mutations;
