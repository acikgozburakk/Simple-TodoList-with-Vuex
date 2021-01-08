import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    baseurl: "http://localhost:3000",
    todList: [],
  },
  mutations: {
    addtodo(state, todo) {
      state.todList.push(todo)
    },
    settodo(state, todo) {
      state.todList = todo;
    }
  },
  actions: {
    addtotodo({ commit, state }, todo) {
      axios
        .post(`${state.baseurl}/todo`, todo)
        .then((response) => {
          commit("addtodo", response.data);
        })
        .catch((err) => console.log(err));
    },

    inittodo({ commit, state }) {
      axios
        .get(`${state.baseurl}/todo`).then((get_response) => {
          console.log("get_response", get_response);
          commit("settodo", get_response.data);
        }).catch(e => console.log("error", e))
    },
    completetodo({ commit, state }, todo) {
      axios
        .patch(`${state.baseurl}/todo/${todo.id}`, todo).then((update_response) => {
          console.log(update_response);
          commit("settodo", update_response.data)
        })
    }
  },
  modules: {
  },
  getters: {
    mytodolist: (state) => state.todList,
  }
})
