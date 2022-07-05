<template>
<div class="w-[433px] mx-auto">
  <div class="w-full h-[255px]">
    <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO">
  </div>
  <div class="w-full flex flex-col">
    <label for="" class="text-center mb-5">
      使用者帳號 : 
      <input class="w-full primary-input" type="text" placeholder="輸入使用者帳號" v-model="userNameInput" @keyup.enter="login(userNameInput)">
    </label>
  <button class="w-full border-4 primary-btn" @click="login(userNameInput)">登入</button>
  </div>
  
</div>
  
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