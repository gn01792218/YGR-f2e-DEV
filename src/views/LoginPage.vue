<template>
  <h1 class="bg-black text-white">使用帳號</h1>
  <input type="text" placeholder="輸入使用者帳號" v-model="userNameInput">
  <button @click="login(userNameInput)">登入</button>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { useRouter } from "vue-router";
const router = useRouter()

const userNameInput = ref('')

function login(userAccount:string){
  if(userAccount==='Jacky'){
    router.push("/Home")
  }
}
</script>