<template>
  <v-btn :color="btnColor"
      @click="click">
    <slot>ボタン</slot>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class MyButton extends Vue {

  @Prop({ default: '' })
  color!: '' | 'red' | 'grey' | 'green' | 'blue' | 'orange'

  get btnColor() {
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

  @Emit('click')
  click() {}
}
</script>

