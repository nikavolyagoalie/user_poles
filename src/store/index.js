import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    page: 1,
    count: 5,
    totalPages: 0,
    usersCount: 20,
    user: {},
    num: 1,
    roles: [],
  },
  getters: {
  },
  mutations: {
    setNum(state, num) {
      state.num = num
    },

    setUsers(state, users) {
      state.users = users
    },

    setUser(state, user) {
      state.user = user
    },

    setPage(state, page) {
      state.page = page
    },

    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },

    setRoles(state, roles) {
      state.roles = roles
    },
  },
  actions: {
    async fetchUsers({ state, commit }) {
      try {
        const res = await axios.get(`https://test-js.alef.dev/users`,
          {
            params: {
              page: state.page,
              count: state.count,
            }
          }
        )

        commit('setTotalPages', state.usersCount / state.count)
        console.log('fetchUsers =>', res.data)
        commit('setUsers', res.data.data)
      } catch (e) {
        console.log(e)
      }
    },

    async fetchCurrentUser({ state, commit }) {
      try {
        const res = await axios.get(`https://test-js.alef.dev/user/${state.num}`)
        console.log('fetchCurrentUser =>', res.data.data)
        commit('setUser', res.data.data)
      } catch (e) {
        console.log(e)
      }
    },

    async fetchRoles({ commit }) {
      try {
        const res = await axios.get(`https://test-js.alef.dev/roles`)
        commit('setRoles', res.data.data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  modules: {
  }
})
