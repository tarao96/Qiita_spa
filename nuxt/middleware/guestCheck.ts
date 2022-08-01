import { Middleware } from '@nuxt/types'

const guestCheck: Middleware = ({ store, redirect, route }): void => {
  if(!store.state.auth.user) {
    redirect({
      name: 'login',
    })
  }
}

export default guestCheck
