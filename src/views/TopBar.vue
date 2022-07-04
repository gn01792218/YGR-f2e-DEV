<template>
<div class="flex justify-between">
  <div class="flex">
    <div>
      <h1 class="bg-black text-white">使用帳號 : {{userName}}</h1>
      <label for="plusMoneyInput">
        增加金額 : 
        <input type="text" v-model="plusMoneyInput" @keyup.enter="plusMoney(plusMoneyInput)">
      </label>
    </div>
    <div class="flex flex-col">
      <button>清空帳號金額</button>
      <button @click="plusMoney(plusMoneyInput)">確認增加</button>
    </div>
  </div>
  <div class="w-[433px] h-[255px]">
    <img class="w-full" src="../assets/images/YGR_logo.png" alt="YGR官網LOGO">
  </div>
  <div>
    <select name="" id="">
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
const {userName} = useUser()
const plusMoneyInput = ref(0)
function plusMoney(num:number){
  if(num <= 0) return
  console.log('增加金額',num)
  //call 增加金額 API
  plusMoneyInput.value = 0
}
</script>