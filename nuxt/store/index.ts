export const actions = {
    async nuxtServerInit({ commit }: {commit: any}, { app }: {app: any}): Promise<void> {
      await app.$axios
          .$get('/current_user')
          .then((user: any): void => commit('auth/setUser', user))
          .catch(() => commit('auth/setUser', null))
    },
}
