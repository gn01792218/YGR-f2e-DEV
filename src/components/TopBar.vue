<template>
<div class="flex justify-between items-center">
  <div class="w-[35%] flex">
    <div>
      <h1 class="mb-5">使用帳號 : {{userName}}</h1>
      <label for="plusMoneyInput">
        增加金額 : 
        <input class="primary-input w-[150px] mr-5" type="text" v-model="plusMoneyInput" @keyup.enter="plusMoney(plusMoneyInput)" @focus="getNumberNull">
      </label>
    </div>
    <div class="flex flex-col">
      <button class="primary-btn mb-5">清空帳號金額</button>
      <button class="primary-btn" @click="plusMoney(plusMoneyInput)">確認增加</button>
    </div>
  </div>
  <div class="w-[30%]">
    <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO" width="433" height="225">
  </div>
  <div class="w-[35%] flex justify-end items-start">
    <select name="" id="" v-model="currentLang" @change="selectLang(currentLang)">
      <option
        v-for ="lang in Lang" :key="lang"
      :value="lang">{{lang}}</option>
      </select>
  </div>
</div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import {Lang} from "@/types/lang"
import useUser from "@/composable/user/useUser"

import { useStore } from 'vuex';
const store = useStore()

const {userName} = useUser()
const currentLang = ref(Lang['zh-CN'])
const plusMoneyInput = ref<number | null>(null)
function plusMoney(num:number | null){
  num = Number(num)
  if(num <= 0 || isNaN(num)) {
    alert('請勿輸入小於等於0的數字；或非數字') 
    plusMoneyInput.value = null
    return
  }
  //call 增加金額 API
  plusMoneyInput.value = null
  console.log('增加金額',num+25)
}
function getNumberNull(){
  plusMoneyInput.value = null
}
function selectLang(lang:Lang){
  store.commit("game/setLang",lang)
}
</script>