import Vuex from 'vuex'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: null,
  statusCode: null,
  messages: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setUser(state, user) {
    state.user = user
  },
  setStatus(state, error) {
    state.statusCode = error.status
    state.messages = error.messages
  },
  clearStatus(state) {
    state.statusCode = null
    state.messages = null
  },
}

export const getters: GetterTree<RootState, RootState> = {
  currentUser(state) {
    return state.user
  },
  isLogin(state): boolean {
    return !!state.user
  },
  isError(state): boolean {
    return state.messages === null
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async login({ commit, dispatch }, submitData): Promise<void> {
    await this.$axios
      .$post('/login', submitData)
      .then((response): void => {
        // mutationsを呼び出す
        commit('clearStatus')
        commit('setUser', response)
      })
      .catch((err): void => {
        dispatch('errorHandler', err)
      })
  },
  errorHandler({ commit, dispatch }, err): void {
    commit('setStatus', {
      status: err.response.status,
      messages: err.response.data.errors,
    })
  },
}
