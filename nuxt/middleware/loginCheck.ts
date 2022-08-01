import { Middleware } from '@nuxt/types'

const loginCheck: Middleware = ({ store, redirect }): void => {
  if(store.state.auth.user) {
    redirect('/mypage')
  }
}

export default loginCheck
