<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      message: "",
    }
  },

  created() {
    this.hello();
  },

  methods: {
    async hello() {
      const res = await axios.get("http://localhost:8000/api/hello");
      this.message = res.data;
    },
  },
}
</script>

