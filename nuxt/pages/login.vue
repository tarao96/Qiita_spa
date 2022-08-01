<template>
  <div class="login">
    <v-app>
      <v-card width="400px" class="mx-auto mt-10">
        <v-card-title>
          <h1 class="display-1">ログイン</h1>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field prepend-icon="mdi-account-circle" label="Email" v-model="loginData.login_id" />
            <v-text-field prepend-icon="mdi-lock"
                v-bind:type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                label="パスワード" v-model="loginData.password"
                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" />
            <v-card-actions>
              <v-btn class="info" @click="login">ログイン</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  middleware: 'loginCheck',
})

export default class Login extends Vue {
  showPassword = false;

  loginData = {
    login_id: '',
    password: '',
  }

  async login(): Promise<void> {
    const submitData = new FormData()
    submitData.append('login_id', this.loginData.login_id)
    submitData.append('password', this.loginData.password)
    // storeのloginアクションを呼び出す
    await this.$store.dispatch('auth/login', submitData)
    if (this.$store.getters['auth/isLogin']) {
      this.$router.push('/mypage')
    }
  }
}
</script>
