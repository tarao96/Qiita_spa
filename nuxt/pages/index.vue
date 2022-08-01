<template>
  <div>
    <router-link to="/login" tag="a">ログイン</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {}
</script>
