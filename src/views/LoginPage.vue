<template>
  <h1 class="bg-black text-white">使用帳號</h1>
  <input type="text" placeholder="輸入使用者帳號" v-model="userNameInput">
</template>
<script setup lang="ts">
import { ref } from "vue";
const userNameInput = ref('')
</script>