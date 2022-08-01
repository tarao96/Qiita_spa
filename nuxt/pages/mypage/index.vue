<template>
  <div>
    <v-app>
      <NavBar color="orange" />
      <v-main>
        <v-container>
          <h1>こんにちは！</h1>
          <MyButton color="blue">Button</MyButton>
          <MyButton color="green" @click="download">Download</MyButton>
          <HelloComponent />
        </v-container>
      </v-main>
      <FooterNav color="orange" />
    </v-app>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import FooterNav from '../../components/Common/FooterNav.vue';
import NavBar from '../../components/Common/NavBar.vue';
import MyButton from '../../components/Common/MyButton.vue';
import axios from 'axios';

@Component({
  middleware: 'guestCheck',
  components: {
    FooterNav,
    NavBar,
    MyButton
  }
})

export default class Index extends Vue {
  admin_users = [];

  async download() {
    const url = "/api/admin_users"
    await axios.get(url)
    .then((res) => {
      this.admin_users = res.data
      alert("非同期通信成功!")
    })
    .catch((e) => {
      alert("非同期通信失敗!")
    });
  }
}
</script>
