<template>
  <h1 class="bg-black text-white">使用帳號</h1>
  <input type="text" placeholder="輸入使用者帳號" v-model="userNameInput" @keyup.enter="login(userNameInput)">
  <button @click="login(userNameInput)">登入</button>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter()
const store = useStore()
const userNameInput = ref('')

function login(userAccount:string){
  if(userAccount==='Jacky'){
    //登入成功的邏輯
    store.commit("user/getUser",userAccount)
    router.push("/Home")
  }else{
    alert('登入失敗，請聯絡帳戶管理員')
  }
}
</script>