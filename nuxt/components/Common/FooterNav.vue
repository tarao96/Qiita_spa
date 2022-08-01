<template>
  <div class="footer">
    <v-footer :color="footerColor" app>
      Vuetify
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FooterNav extends Vue {

  @Prop({ default: '' })
  color!:'' | 'red' | 'grey' | 'green' | 'blue' | 'orange'

  get footerColor() {
    const colorPattarn = {
      '': '#B0BEC5',
      grey: '#B0BEC5',
      red: '#D50000',
      green: '#66BB6A',
      blue: '#0091EA',
      orange: '#FF9800'
    }
    return colorPattarn[this.color]
  }
}
</script>

